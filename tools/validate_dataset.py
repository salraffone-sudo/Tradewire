#!/usr/bin/env python3
"""Validate Tradewire data.js before it is published.

Usage:
    python3 tools/validate_dataset.py [path/to/data.js]

Exit code 0 = clean, 1 = errors found. Warnings never fail the run.
Also recomputes derived fields and reports mismatches against the file.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

PROGRAM_TYPES = {"apprenticeship", "both", "pre-apprenticeship", "not-disclosed"}
TRADE_TYPES = {
    "electrical", "HVAC", "fiber", "low-voltage", "plumbing", "pipefitting",
    "welding", "carpentry", "sheet metal", "mechanical", "iron/steel",
    "heavy equipment", "concrete", "trucking", "manufacturing", "safety",
    "DC operations", "IT", "construction",
}
FUNDING_STATUS = {"disclosed", "committed", "not-disclosed"}
WORKERS_TYPE = {"actual", "projected"}
RELEVANCE = {"high", "medium", "low"}
REQUIRED = [
    "id", "company", "company_short", "program_name", "partner_org",
    "announcement_date", "funding_amount_usd", "funding_status",
    "funding_status_detail", "training_centers", "states", "national",
    "program_type", "program_type_detail", "trade_types", "workers_trained",
    "workers_trained_type", "workers_trained_detail", "data_center_relevance",
    "data_center_relevance_note", "notes", "source_urls",
]
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
# Legacy records carry qualified dates like "2024 (first cohort)" or "n.a.".
LOOSE_DATE_RE = re.compile(r"^(\d{4}(-\d{2}(-\d{2})?)?\b.*|n\.a\.)$")
STATE_RE = re.compile(r"^[A-Z]{2}$")


def load(path: Path) -> dict:
    text = path.read_text()
    match = re.search(r"var __DATASET_TMP = (\{.*?\});\s*Object\.assign", text, re.S)
    if not match:
        raise SystemExit(f"ERROR: could not find __DATASET_TMP object literal in {path}")
    return json.loads(match.group(1))


def main() -> int:
    path = Path(sys.argv[1] if len(sys.argv) > 1 else "data.js")
    data = load(path)
    errors, warnings = [], []

    initiatives = data.get("initiatives") or []
    if not initiatives:
        errors.append("initiatives array is empty or missing")

    seen_ids, used_states = set(), set()
    for i, rec in enumerate(initiatives):
        tag = rec.get("id") or f"index {i}"
        for field in REQUIRED:
            if field not in rec:
                errors.append(f"{tag}: missing required field '{field}'")

        rid = rec.get("id", "")
        if not re.fullmatch(r"init-\d+", str(rid)):
            errors.append(f"{tag}: id must match 'init-N'")
        if rid in seen_ids:
            errors.append(f"{tag}: duplicate id")
        seen_ids.add(rid)

        ann = str(rec.get("announcement_date", ""))
        if DATE_RE.match(ann):
            if ann > date.today().isoformat():
                warnings.append(f"{tag}: announcement_date is in the future")
        elif LOOSE_DATE_RE.match(ann):
            warnings.append(f"{tag}: announcement_date {ann!r} is not a plain YYYY-MM-DD value")
        else:
            errors.append(f"{tag}: announcement_date must be YYYY-MM-DD, a qualified date starting with a year, or 'n.a.'")

        if rec.get("program_type") not in PROGRAM_TYPES:
            errors.append(f"{tag}: invalid program_type {rec.get('program_type')!r}")
        if rec.get("funding_status") not in FUNDING_STATUS:
            errors.append(f"{tag}: invalid funding_status {rec.get('funding_status')!r}")
        if rec.get("data_center_relevance") not in RELEVANCE:
            errors.append(f"{tag}: invalid data_center_relevance {rec.get('data_center_relevance')!r}")
        if rec.get("workers_trained") is not None and rec.get("workers_trained_type") not in WORKERS_TYPE:
            errors.append(f"{tag}: invalid workers_trained_type {rec.get('workers_trained_type')!r}")

        for trade in rec.get("trade_types") or []:
            if trade not in TRADE_TYPES:
                errors.append(f"{tag}: trade_type {trade!r} is not in the fixed vocabulary")

        for st in rec.get("states") or []:
            if not STATE_RE.match(str(st)):
                errors.append(f"{tag}: state {st!r} must be a two-letter USPS code")
            else:
                used_states.add(st)

        amount = rec.get("funding_amount_usd")
        if amount is not None and not isinstance(amount, (int, float)):
            errors.append(f"{tag}: funding_amount_usd must be a number or null")
        if rec.get("funding_status") in {"disclosed", "committed"} and amount is None:
            errors.append(f"{tag}: funding_status {rec.get('funding_status')!r} but funding_amount_usd is null")
        if rec.get("funding_status") == "not-disclosed" and amount is not None:
            warnings.append(f"{tag}: funding_status 'not-disclosed' but an amount is present")

        srcs = rec.get("source_urls") or []
        if not srcs:
            errors.append(f"{tag}: source_urls is empty — every record needs a fetched source")
        for src in srcs:
            if not str(src.get("url", "")).startswith("http"):
                errors.append(f"{tag}: source_urls entry has no valid url")
            if not str(src.get("supports", "")).strip():
                errors.append(f"{tag}: source_urls entry missing 'supports' note")

        if not (rec.get("states") or rec.get("national")):
            warnings.append(f"{tag}: no states listed and national is false")

    regional = {r.get("code") for r in data.get("regional_impact") or []}
    for st in sorted(used_states - regional):
        warnings.append(f"state {st} appears in initiatives but has no regional_impact entry")

    # Derived-field consistency
    breakdown_total = sum(v for v in (data.get("funding_breakdown") or {}).values() if isinstance(v, (int, float)))
    company_total = sum(v for v in (data.get("company_funding") or {}).values() if isinstance(v, (int, float)))
    if data.get("total_disclosed_funding_usd") != breakdown_total:
        errors.append(
            f"total_disclosed_funding_usd ({data.get('total_disclosed_funding_usd')}) "
            f"!= sum of funding_breakdown ({breakdown_total})"
        )
    if company_total != breakdown_total:
        errors.append(f"company_funding sum ({company_total}) != funding_breakdown sum ({breakdown_total})")

    actual = sum(r.get("workers_trained") or 0 for r in initiatives if r.get("workers_trained_type") == "actual")
    projected = sum(r.get("workers_trained") or 0 for r in initiatives if r.get("workers_trained_type") == "projected")
    if data.get("workers_actual") != actual:
        errors.append(f"workers_actual ({data.get('workers_actual')}) != recomputed ({actual})")
    if data.get("workers_projected") != projected:
        errors.append(f"workers_projected ({data.get('workers_projected')}) != recomputed ({projected})")

    if not DATE_RE.match(str(data.get("last_updated", ""))):
        errors.append("last_updated must be YYYY-MM-DD")

    print(f"Validated {path}: {len(initiatives)} initiatives, {len(regional)} regional entries")
    print(f"Recomputed: disclosed={breakdown_total}, workers_actual={actual}, workers_projected={projected}")
    for w in warnings:
        print(f"WARN  {w}")
    for e in errors:
        print(f"ERROR {e}")
    print(f"\n{len(errors)} error(s), {len(warnings)} warning(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
