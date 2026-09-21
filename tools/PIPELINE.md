# Tradewire monthly update pipeline

Automated monthly research feeds this repo; production changes always arrive as a pull request.

## Flow
1. **Research (automated, 1st of each month, 7:00 AM ET)** — Perplexity Computer scheduled task searches
   hyperscaler / AI-infrastructure skilled-trade workforce announcements since the last run.
2. **Extract** — findings are written into the `initiatives` schema documented in
   `../Tradewire-perplexity-update-prompt-template.md` (strict enums for `program_type` and `trade_types`).
3. **Stage** — a dated branch `data-update/YYYY-MM` is created with:
   - updated `data.js` (new/changed initiatives, recomputed derived fields, new `last_updated`)
   - `updates/YYYY-MM.json` — the raw extracted records for that run
   - `updates/YYYY-MM-changes.csv` — change log (record, change type, field, old, new, source, run date)
4. **Validate** — `python3 tools/validate_dataset.py data.js` must exit 0. Errors block the pull request.
5. **Review** — a pull request is opened against `main` with a change summary. Nothing merges automatically.
6. **Publish** — merging to `main` updates the dashboard.

## Derived fields
Never hand-edit `total_disclosed_funding_usd`, `company_funding`, `funding_breakdown`, `workers_actual`,
or `workers_projected` independently of `initiatives` — the validator recomputes them and fails on mismatch.
Money already counted inside a prior commitment goes in `excluded_from_total`, not into the totals.
