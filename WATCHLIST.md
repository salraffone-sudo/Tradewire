# Tradewire internal watchlist

Internal only — not shown on the dashboard. The monthly update run reads this file, checks each open item, and reports status in the PR. Resolved items move to the bottom with a date.

## Open

### W-1 · Amazon Built Together training-center funding (init-20)
- **Opened:** 2026-11-01
- **Issue:** Amazon told GeekWire it expects to put "roughly another $100 million into expanding its training centers." Not counted: it's approximate and can't be confirmed as additional to existing AWS programs.
- **Resolve when:** Amazon or a primary source publishes a firm, trades-specific dollar figure that is clearly new money. Then add it to init-20 `funding_amount_usd` and the totals.
- **Source:** https://www.geekwire.com/2026/amazon-pledges-1b-to-data-center-communities-warns-that-local-opposition-threatens-u-s-ai-lead/

### W-2 · Replacement for dead DMACC source link (init-2, init-13)
- **Opened:** 2026-11-01 (dead since the 2026-10-01 link check)
- **Issue:** https://www.dmacc.edu/west/microsoft-data-center.html returns 404. It supports the $60,000 Microsoft scholarship figure in init-2's $110,000 total. The link is kept with a dead-link note (`link_status: "dead"`).
- **Resolve when:** DMACC, Microsoft, or a reliable outlet publishes a page confirming the Datacenter Academy at DMACC West and the $60,000 scholarships. Then swap the URL, remove the note and `link_status`, and close this item. If the figure can't be re-sourced, raise whether to remove it from the totals.

## Resolved
_(none yet)_
