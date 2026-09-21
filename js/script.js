(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
  $$("[data-cfg]").forEach(el => el.textContent = CONFIG[el.dataset.cfg]);

  $("#menuBtn").addEventListener("click", e => { const o = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); });
  $$("#nav a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("open")));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; e.target.classList.add("in"); io.unobserve(e.target);
    $$("[data-count]", e.target).forEach(countUp);
  }), { threshold: .15 });
  $$(".reveal").forEach(el => io.observe(el));
  function countUp(el) { const end = +el.dataset.count, t0 = performance.now();
    (function step(t) { const p = Math.min((t - t0) / 900, 1); el.textContent = Math.round(end * p); if (p < 1) requestAnimationFrame(step); })(t0); }

  // ---- Prototype: simulated analysis (keyword/rule based; NOT a trained model) ----
  const input = $("#reportText"), out = $("#result");
  const emptyState = () => `<div class="empty"><div class="pulse"></div><p>No analysis yet.<br>Paste a report or load a sample, then run the analysis.</p></div>`;
  out.innerHTML = emptyState();
  $("#samples").innerHTML = SAMPLES.map((s, i) => `<button class="chip" data-i="${i}">${s.label}</button>`).join("");
  $("#samples").addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) { input.value = SAMPLES[b.dataset.i].text; $("#err").textContent = ""; } });
  $("#clearBtn").addEventListener("click", () => { input.value = ""; $("#err").textContent = ""; out.innerHTML = emptyState(); });
  $("#analyzeBtn").addEventListener("click", async () => {
    const text = input.value.trim();
    if (text.length < 40) { $("#err").textContent = "Please enter at least a sentence or two (40+ characters) so the analysis has context."; input.focus(); return; }
    $("#err").textContent = ""; $("#analyzeBtn").disabled = true;
    await runStages(); render(analyze(text)); $("#analyzeBtn").disabled = false;
  });
  async function runStages() {
    const st = [["Preprocessing text",12],["Extracting features",38],["SIF classification",64],["Life-Saving Rule mapping",86],["Pattern matching",100]];
    out.innerHTML = `<div class="loading" role="status"><strong>Prototype analysis simulation…</strong><div class="bar"><i id="pfill"></i></div><span id="pct">0%</span><ul id="stageList">${st.map(s => `<li>${s[0]}</li>`).join("")}</ul></div>`;
    for (let i = 0; i < st.length; i++) { $("#pfill").style.width = st[i][1] + "%"; $("#pct").textContent = st[i][1] + "%"; $$("#stageList li")[i].classList.add("done"); await new Promise(r => setTimeout(r, 450)); }
  }
  // Replace this function with a real API call (e.g. fetch('/api/analyze')) later.
  function analyze(text) {
    const l = text.toLowerCase();
    const rules = Object.entries(RULES).map(([name, k]) => ({ name, hits: k.filter(x => l.includes(x)) })).filter(r => r.hits.length);
    const barriers = BARRIER_TERMS.filter(k => l.includes(k)), signals = SIF_SIGNALS.filter(k => l.includes(k));
    const score = Math.min(rules.reduce((a, r) => a + r.hits.length, 0) * 12 + barriers.length * 14 + signals.length * 9, 100);
    const sif = score >= 35, confidence = sif ? Math.min(60 + Math.round(score * .35), 96) : Math.max(58, 90 - score);
    const risk = score >= 65 ? "High" : score >= 35 ? "Medium" : "Low";
    const terms = [...new Set([...rules.flatMap(r => r.hits), ...barriers, ...signals])];
    return { text, sif, confidence, risk, rules, barriers, terms, top: rules[0]?.name, uncertain: confidence < 70,
      similar: REPORTS.filter(r => rules.some(x => x.name === r.rule)).slice(0, 3) };
  }
  function render(r) {
    let html = esc(r.text);
    [...r.terms].sort((a, b) => b.length - a.length).forEach(t => { html = html.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>"); });
    const action = r.sif ? `Escalate to HSE for review${r.top ? ` — verify ${r.top} controls for this activity and site` : ""}. Review similar reports from the same activity or location.` : "Log as a routine observation. HSE may still review if context suggests otherwise.";
    out.innerHTML = `<div class="res fade">
      <div class="res-head"><span class="badge ${r.sif ? "bad" : "ok"}">${r.sif ? "SIF-potential" : "Non-SIF-potential"}</span><span class="badge risk-${r.risk}">${r.risk} priority</span><small>Simulated output</small></div>
      <div class="conf"><span>Confidence</span><div class="bar"><i style="width:${r.confidence}%"></i></div><b>${r.confidence}%</b></div>
      ${r.uncertain ? `<p class="warn">Low confidence: flagged for mandatory HSE review (false negatives are safety-critical).</p>` : ""}
      <h4>Life-Saving Rule mapping (multi-label)</h4><div class="tags">${r.rules.length ? r.rules.map(x => `<span class="tag">${x.name}</span>`).join("") : "<span class='muted'>No rule matched</span>"}</div>
      ${r.barriers.length ? `<h4>Barrier failures</h4><div class="tags">${r.barriers.map(b => `<span class="tag w">${b}</span>`).join("")}</div>` : ""}
      <h4>Why: important terms</h4><p class="hl">${html}</p>
      ${r.similar.length ? `<h4>Similar sample reports</h4><ul class="sim">${r.similar.map(s => `<li><b>${s.id}</b> · ${s.site} · ${s.summary}</li>`).join("")}</ul>` : ""}
      <h4>Recommended next step</h4><p>${action}</p>
      <div class="review"><span>HSE review:</span><button class="btn sm" data-r="c">Confirm</button><button class="btn sm ghost" data-r="o">Override</button><button class="btn sm ghost" data-r="i">Request info</button></div><p id="reviewMsg" class="muted" aria-live="polite"></p></div>`;
    $$(".review button", out).forEach(b => b.addEventListener("click", () => {
      const m = { c: "Confirmed by reviewer; would feed back into labels.", o: "Overridden; reviewer judgement recorded for model improvement.", i: "More information requested from the reporter." };
      $("#reviewMsg").textContent = "✔ " + m[b.dataset.r] + " (prototype: not saved)"; }));
  }

  // ---- Dashboard ----
  const dSite = $("#fSite"), dRisk = $("#fRisk"), dQ = $("#fQ");
  [...new Set(REPORTS.map(r => r.site))].forEach(s => dSite.insertAdjacentHTML("beforeend", `<option>${s}</option>`));
  function dash() {
    const q = dQ.value.toLowerCase();
    const rows = REPORTS.filter(r => (!dSite.value || r.site === dSite.value) && (!dRisk.value || r.risk === dRisk.value) && (!q || Object.values(r).join(" ").toLowerCase().includes(q)));
    const sif = rows.filter(r => r.sif);
    $("#kTotal").textContent = rows.length; $("#kSif").textContent = sif.length;
    $("#kHigh").textContent = rows.filter(r => r.risk === "High").length;
    $("#kRate").textContent = rows.length ? Math.round(sif.length / rows.length * 100) + "%" : "0%";
    const group = k => Object.entries(sif.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {})).sort((a, b) => b[1] - a[1]);
    const bars = (d, id) => { const max = Math.max(1, ...d.map(x => x[1])); $(id).innerHTML = d.length ? d.map(([k, v]) => `<div class="row"><span>${k}</span><div class="track"><i style="width:${v / max * 100}%"></i></div><b>${v}</b></div>`).join("") : "<p class='muted'>No SIF-potential reports for this filter.</p>"; };
    bars(group("site"), "#chartSite"); bars(group("rule"), "#chartRule");
    const pat = {}; sif.forEach(r => { const k = `${r.activity} · ${r.site} · ${r.barrier}`; pat[k] = (pat[k] || 0) + 1; });
    $("#patterns").innerHTML = Object.entries(pat).filter(p => p[1] > 1).map(([k, v]) => `<li><b>${v}×</b> ${k}</li>`).join("") || "<li class='muted'>No repeated pattern in current filter.</li>";
    $("#tbody").innerHTML = rows.length ? rows.map(r => `<tr><td>${r.id}</td><td>${r.date}</td><td>${r.site}</td><td>${r.activity}</td><td>${r.rule}</td><td><span class="badge ${r.sif ? "bad" : "ok"}">${r.sif ? "SIF" : "Non-SIF"}</span></td><td><span class="badge risk-${r.risk}">${r.risk}</span></td></tr>`).join("") : `<tr><td colspan="7" class="muted">No reports match your filters.</td></tr>`;
  }
  [dSite, dRisk].forEach(e => e.addEventListener("change", dash)); dQ.addEventListener("input", dash); dash();
})();
