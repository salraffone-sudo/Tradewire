# Tradewire Quarterly Update — Perplexity Prompt Template

How to use this each quarter:

1. Open the current `data.js`, copy the full `initiatives` array and the full `regional\_impact` array.
2. Paste them into the template below where marked `\[PASTE CURRENT INITIATIVES ARRAY]` and `\[PASTE CURRENT REGIONAL\_IMPACT ARRAY]`.
3. Run the whole thing in Perplexity (Research/Deep Research mode).
4. Take the JSON it returns and run it through the validation script before touching `data.js`. Do not paste Perplexity's output directly into production — the enum and total-consistency checks are what the script is for.

Do not skip step 4. This template constrains the model, but it cannot guarantee compliance — the script is the actual backstop.

\---

## PROMPT (copy everything below this line into Perplexity)

You are updating a structured dataset that tracks US hyperscaler (Big Tech + adjacent AI-infrastructure) investment in union-backed skilled-trade workforce training, driven by data-center buildout. This is a quarterly refresh of an existing dataset. Today's date is \[INSERT TODAY'S DATE].

### Research scope

Search for new or updated announcements, since \[INSERT DATE OF LAST UPDATE], from: Microsoft, Google, Meta, AWS/Amazon, Apple, Oracle/OpenAI (Stargate), Equinix, Digital Realty, Vantage, and BlackRock (as an AI-infrastructure investor). Look specifically for: new training partnerships, apprenticeship or pre-apprenticeship program announcements, funding commitments tied to trades/workforce (electrical, HVAC, fiber, low-voltage, plumbing, pipefitting, welding, carpentry, sheet metal, mechanical, iron/steel, heavy equipment, concrete, trucking, manufacturing, safety, data-center operations, IT, or construction), new training center openings, and updates to worker counts (graduated/enrolled vs. stated multi-year goals) on programs already in the dataset below.

### Sourcing rules — non-negotiable

* Every fact and every dollar figure must come from a page you actually fetched. If you cannot confirm a number from a fetched source, do not include it — mark the field `null` (for numbers) or `"not disclosed"` / `"n.a."` (for status/text fields), matching the pattern already used in the dataset below.
* Never estimate, infer, or round up an undisclosed figure.
* If a company bundles a new figure into a previously announced commitment (i.e., it's not new money), do not add it to totals — note it and add it to an `excluded\_from\_total`-style entry instead, exactly as the existing dataset already does for several entries.
* Every `source\_urls` entry needs a real, fetched URL and a one-line note on what it supports.

### Existing data (for context — update this, don't start from scratch)

**Current `initiatives` array:**

```
\[PASTE CURRENT INITIATIVES ARRAY]
```

**Current `regional\_impact` array:**

```
\[PASTE CURRENT REGIONAL\_IMPACT ARRAY]
```

### What to return

Return two JSON arrays only — no prose, no markdown formatting, no commentary before or after.

**1. `initiatives`** — the full array, existing entries preserved verbatim unless something about them has genuinely changed (in which case update only the changed fields and add a note explaining the change), plus any new initiatives appended. Every initiative object must have exactly these fields:

```
{
  "id": "init-N",                          // next unused sequential number — do not reuse or renumber existing ids
  "company": "string",                     // full company name as used elsewhere in the dataset (e.g. "Microsoft", not "MSFT")
  "company\_short": "string",
  "program\_name": "string",
  "partner\_org": "string",
  "announcement\_date": "YYYY-MM-DD",
  "funding\_amount\_usd": number or null,    // null if not disclosed
  "funding\_status": "disclosed" | "not-disclosed",
  "funding\_status\_detail": "string",
  "training\_centers": \[ { "name": "string", "city": "string", "state": "string" } ],
  "states": \["XX", ...],                   // two-letter state codes only
  "national": true | false,
  "program\_type": "apprenticeship" | "both" | "pre-apprenticeship" | "not-disclosed",
  "program\_type\_detail": "string",
  "trade\_types": \["electrical","HVAC","fiber","low-voltage","plumbing","pipefitting","welding","carpentry","sheet metal","mechanical","iron/steel","heavy equipment","concrete","trucking","manufacturing","safety","DC operations","IT","construction"],
  "workers\_trained": number or null,
  "workers\_trained\_type": "actual" | "projected",
  "workers\_trained\_detail": "string",
  "data\_center\_relevance": "high" | "medium" | "low",
  "data\_center\_relevance\_note": "string",
  "notes": "string",
  "source\_urls": \[ { "url": "string", "supports": "string" } ]
}
```

**Strict enum rules — read carefully:**

* `program\_type` MUST be exactly one of the four values listed above. Nothing else is valid. If the program genuinely doesn't fit one of the four (e.g., it's a curriculum donation with no training pipeline), use `"not-disclosed"` and explain the mismatch in `notes` — do not invent a fifth category like `"upskilling"` or `"reskilling"`.
* `trade\_types` entries MUST come only from the fixed list above, spelled exactly as shown (case-sensitive, including things like `"DC operations"` and `"sheet metal"` with a space). If a program covers a trade not on this list, pick the closest existing match and note the discrepancy in `notes` rather than adding a new trade string. Flag this clearly so it can be reviewed — do not silently substitute.
* `states` MUST be two-letter USPS codes. If an initiative touches a state not already present in the `regional\_impact` array above, flag this explicitly in your output notes (e.g., a top-level `"new\_states\_requiring\_regional\_impact\_entry": \["XX"]` array) so a `regional\_impact` entry can be added manually — do not attempt to write the `regional\_impact` entry yourself.

**2. `regional\_impact` additions** — only if you flagged new states above, propose new entries in this shape (existing entries unchanged, do not touch them):

```
{
  "code": "XX",
  "name": "Full State Name",
  "driver": "string — what's driving activity in this state, citing the specific initiatives",
  "sources": \["url", ...]
}
```

### What NOT to return

Do not attempt to compute or return `total\_disclosed\_funding\_usd`, `total\_committed\_funding\_usd`, `total\_pledged\_funding\_usd`, `company\_funding`, `funding\_breakdown`, `workers\_actual`, or `workers\_projected`. Those are derived fields calculated separately from the `initiatives` array — leave them out entirely.

\---

## END PROMPT

