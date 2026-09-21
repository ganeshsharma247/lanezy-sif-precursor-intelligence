// ===== Project configuration & SAMPLE DATA (all values simulated for prototype) =====
window.CONFIG = {
  name: "Lanezy", team: "Dethon", psId: "SIH26165",
  tagline: "Detect the warning signs early. Prioritise the highest-risk patterns. Intervene before a serious event occurs.",
  psTitle: "AI/NLP Engine to Detect Serious Injury & Fatality (SIF) Precursors in OIL's Unsafe-Act/Unsafe-Condition and Near-Miss Reports"
};
// Life-Saving Rule dictionary (keyword-based simulation of multi-label tagging)
window.RULES = {
  "Energy Isolation": ["isolat","lockout","loto","tagout","de-energ","energy source","live wire","pressurised","pressurized","stored energy","uncontrolled","breaker","electrical panel"],
  "Hot Work": ["welding","hot work","grinding","spark","flame","cutting torch","gas test","flammable","hydrocarbon","ignition"],
  "Confined Space": ["confined space","tank entry","vessel entry","manhole","enter the tank","oxygen","atmosphere test","sump"],
  "Line of Fire": ["line of fire","suspended load","crane","lifting","dropped","falling object","under load","struck","rig floor","pinch","moving equipment"],
  "Work at Height": ["height","scaffold","harness","ladder","fall arrest","roof","unguarded"],
  "Permit to Work": ["permit","ptw","unauthori"]
};
window.BARRIER_TERMS = ["not isolated","without permit","no barrier","bypassed","missing guard","not tested","no gas test","unguarded","no harness","not tagged","expired","alarm disabled","no supervision","no lockout"];
window.SIF_SIGNALS = ["fatal","near miss","narrowly","almost","close call","nearly","leak","fire","explosion","collapsed","fell","dropped","unconscious","uncontrolled","under load","suspended load","started unexpectedly"];
window.SAMPLES = [
  { label:"Uncontrolled energy", text:"During pump maintenance at the gas compressor station, a technician started removing the coupling guard while the motor breaker was not isolated and no lockout tag was applied. The pump started unexpectedly and the coupling rotated within 20 cm of his hand." },
  { label:"Suspended load", text:"While lifting a pipe spool with a crane on the rig floor, two crew members were standing under the suspended load. The sling slipped and the spool dropped about 1 m from where the crew was standing. No injury; work stopped." },
  { label:"Housekeeping (minor)", text:"Unsafe condition observed near the site office: a few empty cartons were left on the corridor floor. Cartons were removed and a housekeeping reminder was shared with the team." }
];
window.REPORTS = [
  { id:"R-1042", site:"Drilling Site A", activity:"Maintenance", rule:"Energy Isolation", barrier:"Not isolated", sif:true, risk:"High", date:"2026-08-28", summary:"Guard removed on energised pump, no lockout" },
  { id:"R-1041", site:"Gas Plant B", activity:"Hot Work", rule:"Hot Work", barrier:"No gas test", sif:true, risk:"High", date:"2026-08-27", summary:"Welding near hydrocarbon vent without gas test" },
  { id:"R-1039", site:"Drilling Site A", activity:"Lifting", rule:"Line of Fire", barrier:"No barrier", sif:true, risk:"High", date:"2026-08-25", summary:"Crew under suspended load during spool lift" },
  { id:"R-1037", site:"Tank Farm C", activity:"Tank Entry", rule:"Confined Space", barrier:"Not tested", sif:true, risk:"Medium", date:"2026-08-22", summary:"Entry started before atmosphere test recorded" },
  { id:"R-1034", site:"Drilling Site A", activity:"Maintenance", rule:"Energy Isolation", barrier:"Not isolated", sif:true, risk:"Medium", date:"2026-08-19", summary:"Valve isolated but no tag applied" },
  { id:"R-1030", site:"Pipeline D", activity:"Excavation", rule:"Permit to Work", barrier:"Expired permit", sif:false, risk:"Low", date:"2026-08-15", summary:"Permit expired by 1 hour, work paused" },
  { id:"R-1028", site:"Gas Plant B", activity:"Work at Height", rule:"Work at Height", barrier:"Unguarded", sif:true, risk:"Medium", date:"2026-08-12", summary:"Scaffold edge without guardrail" },
  { id:"R-1025", site:"Tank Farm C", activity:"Housekeeping", rule:"—", barrier:"—", sif:false, risk:"Low", date:"2026-08-09", summary:"Cartons on walkway" },
  { id:"R-1021", site:"Drilling Site A", activity:"Lifting", rule:"Line of Fire", barrier:"No barrier", sif:true, risk:"High", date:"2026-08-05", summary:"Dropped tool from derrick platform" },
  { id:"R-1018", site:"Pipeline D", activity:"Maintenance", rule:"Energy Isolation", barrier:"Bypassed", sif:true, risk:"Medium", date:"2026-08-02", summary:"Interlock bypassed during valve service" }
];
