/* ============================================================
   Tradewire — dashboard logic (v2)
   Data embedded in data.js (DATASET). Vanilla JS, no deps.
   ============================================================ */
(function () {
  "use strict";

  const D = DATASET;
  const INITS = D.initiatives;

  /* ---- Company meta ---- */
  const COMPANY_META = {
    "Microsoft":      { color: "var(--color-msft)",            short: "Microsoft" },
    "Google":         { color: "var(--color-google)",          short: "Google" },
    "Meta":           { color: "var(--color-meta)",            short: "Meta" },
    "AWS":            { color: "var(--color-aws)",             short: "AWS" },
    "Apple":          { color: "var(--color-apple)",           short: "Apple" },
    "BlackRock":      { color: "var(--color-blackrock)",      short: "BlackRock" },
    "Oracle/OpenAI":  { color: "var(--color-oracle)",          short: "Stargate" },
    "Vantage":        { color: "var(--color-vantage)",        short: "Vantage" },
    "Equinix":        { color: "var(--color-equinix)",         short: "Equinix" },
    "Digital Realty": { color: "var(--color-digitalrealty)",  short: "Dig.Realty" },
  };
  function companyColor(c){ return (COMPANY_META[c]||{}).color || "var(--color-primary)"; }
  function companyShort(c){ return (COMPANY_META[c]||{}).short || c; }

  /* ---- Trade order & labels ---- */
  const TRADE_ORDER = [
    "electrical","HVAC","fiber","low-voltage","plumbing","pipefitting","welding",
    "carpentry","sheet metal","mechanical","iron/steel","heavy equipment","concrete",
    "trucking","manufacturing","safety","DC operations","IT","construction"
  ];
  const TRADE_LABELS = {
    "electrical":"Electrical","HVAC":"HVAC","fiber":"Fiber","low-voltage":"Low-voltage",
    "plumbing":"Plumbing","pipefitting":"Pipefitting","welding":"Welding","carpentry":"Carpentry",
    "sheet metal":"Sheet metal","mechanical":"Mechanical","iron/steel":"Iron/steel",
    "heavy equipment":"Heavy equip.","concrete":"Concrete","trucking":"Trucking",
    "manufacturing":"Manufacturing","safety":"Safety","DC operations":"DC operations",
    "IT":"IT","construction":"Construction"
  };
  const tradeLabel = t => TRADE_LABELS[t] || t;

  /* ---- Program buckets ---- */
  const PROG_BUCKETS = [
    { id:"apprenticeship", label:"Apprenticeship",       color:"var(--color-primary)" },
    { id:"both",           label:"Apprentice + Journey",  color:"var(--color-accent-blue)" },
    { id:"pre-apprentice", label:"Pre-apprenticeship",   color:"var(--color-aws)" },
    { id:"not-disclosed",  label:"Not disclosed",        color:"var(--color-text-faint)" },
  ];
  function initInBucket(init, bucket){
    if(bucket==="apprenticeship") return ["apprenticeship","both"].includes(init.program_type);
    if(bucket==="journey")        return init.program_type==="both";
    if(bucket==="pre-apprentice") return init.program_type==="pre-apprenticeship";
    if(bucket==="not-disclosed") return init.program_type==="not-disclosed";
    return false;
  }

  /* ---- State name map ---- */
  const STATE_NAME = {
    VA:"Virginia",TX:"Texas",OH:"Ohio",IA:"Iowa",WI:"Wisconsin",MI:"Michigan",
    LA:"Louisiana",IN:"Indiana",GA:"Georgia",MS:"Mississippi",WY:"Wyoming",
    NE:"Nebraska",AZ:"Arizona",WA:"Washington",NM:"New Mexico",TN:"Tennessee",
    IL:"Illinois",NC:"North Carolina",SC:"South Carolina"
  };

  /* ---- Filter state ---- */
  const F = { companies:new Set(), trades:new Set(), programs:new Set(), states:new Set() };

  /* ---- Helpers ---- */
  function fmtMoney(n){
    if(n==null) return "Not disclosed";
    if(n>=1e9) return "$"+(n/1e9).toFixed(2).replace(/\.00$/,"")+"B";
    if(n>=1e6) return "$"+(n/1e6).toFixed(2).replace(/\.?0+$/,"").replace(/\.0$/,"")+"M";
    if(n>=1e3) return "$"+(n/1e3).toFixed(0)+"K";
    return "$"+n.toLocaleString();
  }
  function fmtNum(n){ return n==null?"—":n.toLocaleString(); }
  function escapeHtml(s){ return String(s==null?"":s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
  function domainOf(url){ try{ return new URL(url).hostname.replace(/^www\./,""); }catch(e){ return "source"; } }
  function relColor(r){ return r==="high"?"var(--color-primary)":r==="low"?"var(--color-text-faint)":"var(--color-aws)"; }

  /* ============================================================
     KPIs
     ============================================================ */
  function renderKPIs(){
    const cards = [
      { label:"Total disclosed funding", value:fmtMoney(D.total_disclosed_funding_usd), foot:"Committed; deduplicated", accent:"var(--color-primary)" },
      { label:"Initiatives tracked", value:INITS.length, foot:"9 organizations", accent:"var(--color-accent-blue)" },
      { label:"Organizations", value:new Set(INITS.map(i=>i.company)).size, foot:"Hyperscalers + investors", accent:"var(--color-accent-blue)" },
      { label:"Workers trained (actual)", value:fmtNum(D.workers_actual), foot:"Graduates & enrollees", accent:"var(--color-primary)" },
      { label:"Workers targeted (goals)", value:fmtNum(D.workers_projected), foot:"Stated multi-year goals", accent:"var(--color-aws)" },
      { label:"States impacted", value:D.regional_impact.length, foot:"Data-center regions", accent:"var(--color-primary)" },
    ];
    document.getElementById("kpiRow").innerHTML = cards.map(c=>`
      <div class="kpi" style="--kpi-accent:${c.accent}">
        <div class="label">${c.label}</div>
        <div class="value num">${c.value}</div>
        <div class="foot">${c.foot}</div>
      </div>`).join("");
  }

  /* ============================================================
     Filters
     ============================================================ */
  function renderFilters(){
    // Company
    const companies = [...new Set(INITS.map(i=>i.company))];
    document.getElementById("fCompany").innerHTML = companies.map(c=>{
      const cnt = INITS.filter(i=>i.company===c).length;
      return `<button class="chip" data-filter="company" data-val="${escapeHtml(c)}" style="--chip-color:${companyColor(c)}">
        <span class="swatch"></span>${companyShort(c)}<span class="count num">${cnt}</span></button>`;
    }).join("");

    // Trades
    const tc = {};
    INITS.forEach(i=>(i.trade_types||[]).forEach(t=>tc[t]=(tc[t]||0)+1));
    const trades = TRADE_ORDER.filter(t=>tc[t]);
    document.getElementById("fTrade").innerHTML = trades.map(t=>`
      <button class="chip" data-filter="trade" data-val="${escapeHtml(t)}">${tradeLabel(t)}<span class="count num">${tc[t]}</span></button>`).join("");

    // Program (apprenticeship vs journey-level)
    document.getElementById("fProgram").innerHTML = PROG_BUCKETS.map(b=>{
      const cnt = INITS.filter(i=>initInBucket(i,b.id)).length;
      return `<button class="chip" data-filter="program" data-val="${b.id}">${b.label}<span class="count num">${cnt}</span></button>`;
    }).join("");

    // States (from regional_impact) + National
    const stateChips = [{code:"national",name:"National"}, ...D.regional_impact.map(r=>({code:r.code,name:r.name}))];
    // dedupe state codes
    const seen=new Set(); const dedup=[];
    stateChips.forEach(s=>{ const k=s.code==="national"?"national":s.code; if(!seen.has(k)){seen.add(k);dedup.push(s);} });
    document.getElementById("fState").innerHTML = dedup.map(s=>{
      const cnt = s.code==="national" ? INITS.filter(i=>i.national).length : INITS.filter(i=>(i.states||[]).includes(s.code)).length;
      return `<button class="chip" data-filter="state" data-val="${s.code}">${s.code==="national"?"National":s.code}<span class="count num">${cnt}</span></button>`;
    }).join("");

    document.querySelectorAll(".chip[data-filter]").forEach(chip=>{
      chip.addEventListener("click",()=>{
        const f = chip.dataset.filter;
        const set = f==="company"?"companies":f==="trade"?"trades":f==="program"?"programs":"states";
        const v = chip.dataset.val;
        if(set==="states" && F[set].has(v)){} 
        if(F[set].has(v)) F[set].delete(v); else F[set].add(v);
        chip.setAttribute("aria-pressed", F[set].has(v)?"true":"false");
        renderAll();
      });
    });
  }
  function syncFilterChips(){
    document.querySelectorAll(".chip[data-filter]").forEach(chip=>{
      const f=chip.dataset.filter; const set=f==="company"?"companies":f==="trade"?"trades":f==="program"?"programs":"states";
      chip.setAttribute("aria-pressed", F[set].has(chip.dataset.val)?"true":"false");
    });
    const n=F.companies.size+F.trades.size+F.programs.size+F.states.size;
    document.getElementById("filterCount").textContent = `${n} active`;
  }

  /* ============================================================
     Filtering
     ============================================================ */
  function filteredInits(){
    return INITS.filter(i=>{
      if(F.companies.size && !F.companies.has(i.company)) return false;
      if(F.trades.size && !(i.trade_types||[]).some(t=>F.trades.has(t))) return false;
      if(F.programs.size && ![...F.programs].some(b=>initInBucket(i,b))) return false;
      if(F.states.size){
        const matches = (i.states||[]).some(s=>F.states.has(s)) || (F.states.has("national") && i.national);
        if(!matches) return false;
      }
      return true;
    });
  }

  /* ============================================================
     Initiative cards
     ============================================================ */
  function progLabel(i){
    const p=i.program_type;
    if(p==="both") return "Apprentice + Journey";
    if(p==="apprenticeship") return "Apprenticeship";
    if(p==="pre-apprentice") return "Pre-apprentice";
    if(p==="not-disclosed") return "Level n.d.";
    return p;
  }
  function renderInitiatives(){
    const list = filteredInits();
    document.getElementById("initCount").textContent = `${list.length} of ${INITS.length} shown`;
    const el = document.getElementById("initList");
    if(!list.length){ el.innerHTML = `<div class="empty"><div class="big">No initiatives match</div>Try removing a filter.</div>`; return; }
    el.innerHTML = list.map(i=>{
      const noProgram = /no .*program.*confirmed|n\.a\. - no/i.test(i.program_name);
      const funding = i.funding_amount_usd!=null
        ? `<span class="funding-amount num">${fmtMoney(i.funding_amount_usd)}</span>`
        : `<span class="funding-amount nil">Not disclosed</span>`;
      const stClass = i.funding_status==="committed"?"st-committed":i.funding_status==="pledged"?"st-pledged":"st-nd";
      const stLabel = i.funding_status==="committed"?"Committed":i.funding_status==="pledged"?"Pledged":"Not disclosed";
      const trades = (i.trade_types||[]).map(t=>`<span class="tag trade">${tradeLabel(t)}</span>`).join("");
      const prog = `<span class="tag prog">${progLabel(i)}</span>`;
      const date = i.announcement_date && !i.announcement_date.startsWith("n.a") ? `<span class="tag mono">${escapeHtml(i.announcement_date)}</span>` : "";

      const centers = (i.training_centers||[]).length
        ? (i.training_centers.map(c=>{
            const loc=[c.city,c.state].filter(Boolean).join(", ");
            return `<div class="detail-field"><div class="dl">Training center</div><div class="dv">${escapeHtml(c.name)}${loc?` · <span class="muted">${escapeHtml(loc)}</span>`:""}</div></div>`;
          }).join(""))
        : `<div class="detail-field"><div class="dl">Training center</div><div class="dv faint">Not named in sources</div></div>`;

      const wt = i.workers_trained!=null
        ? `<div class="detail-field"><div class="dl">Workers trained</div><div class="dv"><strong class="num">${fmtNum(i.workers_trained)}</strong> <span class="muted">${i.workers_trained_type||""}${i.workers_trained_detail?` · ${escapeHtml(i.workers_trained_detail.split("(")[0].trim())}`:""}</span></div></div>`
        : `<div class="detail-field"><div class="dl">Workers trained</div><div class="dv faint">Not disclosed</div></div>`;

      const partners = i.partner_org ? `<div class="init-partner">${escapeHtml(i.partner_org)}</div>` : "";
      const sources = (i.source_urls||[]).map(s=>
        `<a class="source-link" href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(s.url)}">${escapeHtml(domainOf(s.url))}</a>`).join("");
      const relNoteRaw = i.data_center_relevance_note || "";
      let relNote = relNoteRaw;
      if (relNoteRaw.length > 180) {
        const cut = relNoteRaw.slice(0, 180);
        const lastSpace = cut.lastIndexOf(" ");
        relNote = (lastSpace > 120 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:\s]+$/, "") + "…";
      }
      const relDot = `<span class="dot" style="background:${relColor(i.data_center_relevance)}"></span>`;
      const nameClass = noProgram ? "init-name faint" : "init-name";

      return `
      <article class="init-card reveal" style="--card-accent:${companyColor(i.company)}">
        <div class="init-top">
          <div class="init-top-left">
            <span class="company-badge" style="--badge-color:${companyColor(i.company)}">${companyShort(i.company)}</span>
            <div>
              <div class="${nameClass}">${escapeHtml(i.program_name)}</div>
              ${partners}
            </div>
          </div>
          <div class="funding-block">${funding}<div class="funding-status ${stClass}">${stLabel}</div></div>
        </div>
        <div class="init-tags">${date}${trades}${prog}</div>
        <div class="init-detail">
          ${centers}
          ${wt}
          <div class="detail-field"><div class="dl">Program level</div><div class="dv muted">${escapeHtml(i.program_type_detail||"—")}</div></div>
          <div class="detail-field"><div class="dl">States</div><div class="dv muted">${(i.states||[]).length?escapeHtml((i.states||[]).join(", "))+(i.national?" + national":""):"National / n.a."}</div></div>
        </div>
        <div class="init-foot">
          <span class="dc-relevance">${relDot}<span class="dc-label">Data-center relevance: <strong>${escapeHtml(i.data_center_relevance)}</strong></span>${relNote?`<span class="dc-note">— ${escapeHtml(relNote)}</span>`:""}</span>
          <div class="sources">${sources}</div>
        </div>
      </article>`;
    }).join("");
  }

  /* ============================================================
     State grid (from regional_impact)
     ============================================================ */
  function renderStateGrid(){
    const list = filteredInits();
    const cnt = {};
    list.forEach(i=>(i.states||[]).forEach(s=>{ if(!F.states.size || F.states.has(s)) cnt[s]=(cnt[s]||0)+1; }));
    const max = Math.max(1, ...Object.values(cnt), 1);
    document.getElementById("stateGrid").innerHTML = D.regional_impact.map(r=>{
      const c = cnt[r.code]||0;
      const active = F.states.has(r.code);
      return `<button class="state-cell ${active?"active":""}" data-state="${r.code}" title="${r.name}">
        <span class="st-code">${r.code}</span>
        <span class="st-name">${r.name}</span>
        <span class="st-cnt num">${c} ${c===1?"init.":"init."}</span>
      </button>`;
    }).join("");
    document.querySelectorAll(".state-cell").forEach(cell=>{
      cell.addEventListener("mouseenter",()=>showStateNote(cell.dataset.state));
      cell.addEventListener("focus",()=>showStateNote(cell.dataset.state));
      cell.addEventListener("click",()=>toggleStateFilter(cell.dataset.state));
    });
  }
  function showStateNote(code){
    const r = D.regional_impact.find(x=>x.code===code);
    const note=document.getElementById("stateNote");
    if(!r){ note.innerHTML="Hover or click a state to see its data-center cluster and drivers. Click to filter the list."; return; }
    // shorten driver
    const d = r.driver.length>320 ? r.driver.slice(0,318)+"…" : r.driver;
    note.innerHTML = `<span class="driver">${r.name}</span> — ${escapeHtml(d)}`;
  }
  function toggleStateFilter(code){
    if(F.states.has(code)) F.states.delete(code); else F.states.add(code);
    syncFilterChips(); renderAll();
  }

  /* ---- Trades targeted ---- */
  function renderTrades(){
    const list=filteredInits(); const c={};
    list.forEach(i=>(i.trade_types||[]).forEach(t=>c[t]=(c[t]||0)+1));
    const max=Math.max(1,...Object.values(c));
    const order=TRADE_ORDER.filter(t=>c[t]);
    document.getElementById("tradeList").innerHTML = order.map(t=>`
      <div class="trade-row">
        <span class="t-name">${tradeLabel(t)}</span>
        <span class="t-bar"><span class="t-fill" style="width:${(c[t]/max*100).toFixed(0)}%"></span></span>
        <span class="t-cnt num">${c[t]}</span>
      </div>`).join("") || `<div class="empty" style="padding:1rem">No trades in selection</div>`;
  }

  /* ---- Funding by company (deduplicated from metadata) ---- */
  function renderCompanyBars(){
    const cf = D.company_funding || {};
    const companies = [...new Set(INITS.map(i=>i.company))];
    const entries = companies.map(c=>({co:c, val:cf[c]||0})).sort((a,b)=>b.val-a.val);
    const max = Math.max(1, ...entries.map(e=>e.val));
    document.getElementById("companyBars").innerHTML = entries.map(e=>`
      <div class="cbar-row">
        <span class="cbar-name" style="color:${companyColor(e.co)}">${companyShort(e.co)}</span>
        <span class="cbar-track"><span class="cbar-fill" style="width:${(e.val/max*100).toFixed(0)}%;background:${companyColor(e.co)}"></span></span>
        <span class="cbar-val num">${e.val?fmtMoney(e.val):"n.d."}</span>
      </div>`).join("");
  }

  /* ---- Program-type split ---- */
  function renderProgSplit(){
    const list=filteredInits(); const total=list.length||1; const c={};
    PROG_BUCKETS.forEach(b=>c[b.id]=0);
    list.forEach(i=>{ if(c[i.program_type]!=null) c[i.program_type]++; });
    document.getElementById("progSplit").innerHTML = PROG_BUCKETS.map(b=>
      `<div class="seg" style="width:${(c[b.id]/total*100).toFixed(0)}%;background:${b.color}" title="${b.label}: ${c[b.id]}"></div>`).join("");
    document.getElementById("progLegend").innerHTML = PROG_BUCKETS.map(b=>`
      <div class="li"><span class="sq" style="background:${b.color}"></span>${b.label}
        <span class="pc num">${c[b.id]} · ${Math.round(c[b.id]/total*100)}%</span></div>`).join("");
  }

  /* ---- Footer sources ---- */
  function renderAllSources(){
    const seen={}; const rows=[];
    INITS.forEach(i=>(i.source_urls||[]).forEach(s=>{ if(!seen[s.url]){seen[s.url]=1; rows.push({url:s.url,co:i.company});} }));
    document.getElementById("allSources").innerHTML =
      `<div>Primary sources (${rows.length} URLs, linked per initiative above):</div>` +
      rows.map(r=>`<div>· <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(domainOf(r.url))} — ${escapeHtml(companyShort(r.co))}</a></div>`).join("");
  }

  /* ---- Master render ---- */
  function renderAll(){ syncFilterChips(); renderInitiatives(); renderStateGrid(); renderTrades(); renderCompanyBars(); renderProgSplit(); }
  function resetAll(){ F.companies.clear();F.trades.clear();F.programs.clear();F.states.clear(); renderAll(); }

  /* ---- Theme ---- */
  (function(){
    const t=document.querySelector("[data-theme-toggle]"), r=document.documentElement;
    let d=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
    if(d==="light") r.setAttribute("data-theme","light");
    function setIcon(){
      t.innerHTML = d==="dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
      t.setAttribute("aria-label","Switch to "+(d==="dark"?"light":"dark")+" mode");
    }
    setIcon();
    t&&t.addEventListener("click",()=>{ d=d==="dark"?"light":"dark"; r.setAttribute("data-theme",d); setIcon(); });
  })();

  /* ---- Init ---- */
  document.getElementById("lastUpdated").textContent = "Updated "+(D.last_updated||"");
  document.getElementById("resetBtn").addEventListener("click",resetAll);
  renderKPIs(); renderFilters(); renderAll(); renderAllSources();
})();
