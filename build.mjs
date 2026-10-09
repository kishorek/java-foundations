import { NODES, STAGES, PROJECTS, edges, JAVA_VERSION } from './src/data/curriculum.js';
import { LESSONS_A } from './src/data/lessons-a.js';
import { LESSONS_B } from './src/data/lessons-b.js';
import { LESSONS_C } from './src/data/lessons-c.js';
import { LESSONS_E } from './src/data/lessons-e.js';
import { LESSONS_D } from './src/data/lessons-d.js';
import { GLOSSARY } from './src/data/glossary.js';
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
const LESSONS = { ...LESSONS_A, ...LESSONS_B, ...LESSONS_C, ...LESSONS_D, ...LESSONS_E };
const TYPE_LABEL = { concept: 'Concept', demo: 'Demo', practice: 'Practice', quiz: 'Quiz', project: 'Project', review: 'Review' };
const nodeById = Object.fromEntries(NODES.map(n => [n.id, n]));
const stageByN = Object.fromEntries(STAGES.map(s => [s.n, s]));
const order = [...NODES].sort((a, b) => a.stage - b.stage || NODES.indexOf(a) - NODES.indexOf(b));
const lessonIds = order.map(n => n.id);

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escAttr = s => esc(s).replace(/'/g, '&#39;');
const jstr = o => JSON.stringify(o).replace(/</g, '\\u003c');

function topbar(prefix, current, allIds) {
  return `<header class="topbar"><div class="topbar-in">
  <a class="skip" href="#main">Skip to content</a>
  <a class="brand" href="${prefix}index.html"><span class="brand-mark">J{ }</span><span>Java Foundations<small>From zero to real apps</small></span></a>
  <button class="iconbtn menubtn" data-menu aria-label="Open navigation">☰ Menu</button>
  <nav class="nav" aria-label="Main">
    <a href="${prefix}graph.html" class="hide-m" ${current === 'graph' ? 'aria-current="page"' : ''}>Map</a>
    <a href="${prefix}projects.html" class="hide-m" ${current === 'projects' ? 'aria-current="page"' : ''}>Projects</a>
    <a href="${prefix}playground.html" class="hide-m" ${current === 'play' ? 'aria-current="page"' : ''}>Playground</a>
    <a href="${prefix}glossary.html" class="hide-m" ${current === 'gloss' ? 'aria-current="page"' : ''}>Glossary</a>
    <button class="iconbtn" data-theme-toggle aria-label="Toggle light and dark theme">◐ Theme</button>
    <span class="progress-pill" data-ring title="Your overall progress"></span>
  </nav></div></header>`;
}
function sidenav(prefix, currentId) {
  let h = `<aside class="sidenav" aria-label="Course navigation"><h3>Start here</h3>
  <a href="${prefix}index.html">🏠 Course home</a>
  <a href="${prefix}graph.html">🗺️ Course map</a>
  <a href="${prefix}progress.html">📊 My progress + review</a>
  <a href="${prefix}search.html">🔎 Search</a>`;
  for (const s of STAGES) {
    if (s.n === 7) continue;
    h += `<h3>Stage ${s.n} · ${esc(s.title)}</h3>`;
    for (const n of order.filter(n => n.stage === s.n)) {
      h += `<a href="${prefix}lessons/${n.id}.html" data-nav="${n.id}" class="${n.id === currentId ? 'current' : ''}"><span class="dot"></span><span>${esc(n.short || n.title)}</span></a>`;
    }
  }
  h += `<h3>Projects</h3>`;
  for (const p of PROJECTS) h += `<a href="${prefix}projects/${p.id}.html" class="${p.id === currentId ? 'current' : ''}"><span class="dot"></span><span>${esc(p.title)}</span></a>`;
  h += `<h3>Reference</h3><a href="${prefix}glossary.html">📖 Glossary</a><a href="${prefix}playground.html">🧪 Playground</a><a href="${prefix}help.html">♿ Help + accessibility</a></aside>`;
  return h;
}
function footer(prefix) {
  return `<footer class="site"><div class="in">
  <div style="flex:2;min-width:16rem"><b>Java Foundations</b> · ${esc(JAVA_VERSION)} · static site, no account, progress stays in your browser.<br><span>Built for absolute beginners. 95% friendly teaching, 5% gentle jokes.</span></div>
  <div><a href="${prefix}help.html">Help</a> · <a href="${prefix}glossary.html">Glossary</a> · <a href="${prefix}search.html">Search</a> · <a href="${prefix}progress.html">Export progress</a></div>
  </div></footer>`;
}
function pageShell({ prefix, title, desc, current, lessonId = null, body, extraHead = '' }) {
  return `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · Java Foundations</title>
<meta name="description" content="${escAttr(desc || 'Learn Java from zero with animated lessons, quizzes, and projects.')}">
<link rel="stylesheet" href="${prefix}assets/css/main.css">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
${extraHead}</head>
<body${lessonId ? ` data-lesson="${lessonId}"` : ''}>
${topbar(prefix, current, lessonIds)}
<div class="shell">${sidenav(prefix, lessonId)}<main class="main" id="main">${body}</main></div>
${footer(prefix)}
<script type="module">
import {initTheme,initChrome} from '${prefix}assets/js/app.js';
initTheme();initChrome(${jstr(lessonIds)});
</script></body></html>`;
}
function codeBlock(code, output, notes, copyText, lang = 'java') {
  const fname = lang === 'bash' ? 'terminal' : lang === 'xml' ? 'pom.xml' : 'Main.java';
  const langName = lang === 'bash' ? 'shell' : lang === 'xml' ? 'XML' : 'Java 17';
  return `<div class="codeblock"><div class="codeblock-head"><span class="fn">${fname}</span><span>${langName}</span><button data-copy="${escAttr(copyText || code)}">Copy</button></div>
  <pre><code>${esc(code)}</code></pre>${output != null ? `<div class="out">▶ Output\n${esc(output)}</div>` : ''}</div>
  ${notes?.length ? `<ul class="linenotes">${notes.map(n => `<li>${n}</li>`).join('')}</ul>` : ''}`;
}
function simBox(sim) {
  if (!sim) return '';
  const inputs = sim.fields.map(f => f.o
    ? `<select data-in aria-label="operator">${f.o.map(o => `<option>${esc(o)}</option>`).join('')}</select>`
    : `<input data-in value="${escAttr(f.v)}" size="8" aria-label="value">`).join(' ');
  return `<div class="stage" data-sim="${escAttr(sim.kind)}"><b>Try it (visual simulation — not a real compiler)</b><br>
  <span style="font-size:.9rem;color:var(--ink-2)">${esc(sim.label)}</span>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.6rem;align-items:center">${inputs}<button data-go class="btn btn-dark btn-small">Run simulation</button></div>
  <div class="out" data-out style="border-radius:10px;margin-top:.6rem">…</div></div>`;
}
function lessonBody(n, L) {
  const st = stageByN[n.stage];
  const idx = order.findIndex(x => x.id === n.id);
  const prev = order[idx - 1], next = order[idx + 1];
  const prereqLinks = (n.prerequisites || []).map(p => nodeById[p] ? `<a href="../lessons/${p}.html">${esc(nodeById[p].title)}</a>` : esc(p)).join(' · ') || 'None — start here!';
  const quizJson = jstr(L.quiz || []);
  const animJson = jstr((L.anim?.steps || []).map(s => ({ caption: s.caption, html: s.html })));
  return `
  <p class="crumbs"><a href="../index.html">Home</a> › <a href="../stages/stage-${n.stage}.html">Stage ${n.stage}</a> › ${esc(TYPE_LABEL[n.type] || n.type)}</p>
  <div class="lesson-head"><h1>${esc(n.title)}</h1>
  <div class="lesson-meta">
    <span class="chip stage" style="--sc:${st?.color || '#0E7C6B'}">Stage ${n.stage}</span>
    <span class="chip type">${esc(TYPE_LABEL[n.type] || n.type)}</span>
    <span class="chip">⏱ ${n.durationMinutes} min</span>
    <a class="chip" href="../glossary.html">📖 Glossary</a>
  </div></div>
  <div class="prose"><p>${L.intro}</p>
  <div class="callout"><b>🔎 Motivating question</b>${esc(L.question)}</div>
  <h2>Objectives</h2><ul>${(n.objectives || []).map(o => `<li>${esc(o)}</li>`).join('')}</ul>
  <p><b>Needs first:</b> ${prereqLinks}</p></div>

  <section class="lesson-sec" aria-label="Analogy"><h2><span class="n">1</span> Start with an analogy</h2><p class="sub">Real life first, code second.</p>
  <div class="prose"><p>${L.analogy}</p><div class="callout warn"><b>⚠️ Where the analogy breaks</b>${L.analogyFail}</div></div></section>

  <section class="lesson-sec" aria-label="Concept"><h2><span class="n">2</span> The concept, plainly</h2><p class="sub">One idea at a time, words before jargon.</p>
  <div class="prose">${(L.explain || []).map(p => `<p>${p}</p>`).join('')}
  ${(L.tech || []).length ? `<div class="callout"><b>⚙️ Tech details — precise facts</b><ul style="margin:.4rem 0 0;padding-left:1.2rem">${L.tech.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}</div></section>

  <section class="lesson-sec" aria-label="Animation"><h2><span class="n">3</span> Watch it move: ${esc(L.anim?.title || 'visual')}</h2><p class="sub">Step at your pace. Text explains every move.</p>
  <div class="stage" data-stepper><div class="viz" data-body></div>
  <div class="step-caption" data-cap role="status"></div>
  <div class="stage-controls"><button class="primary" data-play>Play</button><button data-prev>← Back</button><button data-next>Next →</button><button data-restart>Restart</button></div></div></section>

  <section class="lesson-sec" aria-label="Code demo"><h2><span class="n">4</span> Live code demo</h2><p class="sub">Small, correct ${esc(JAVA_VERSION)} code. Read, trace, copy.</p>
  ${codeBlock(L.code, L.output, L.codeNotes, null, L.lang)}
  <div class="prose">${L.lang === 'bash' ? '<div class="callout"><b>💻 Terminal commands</b>Type these lines in your terminal, not in a Java file.</div>' : L.interactive ? '<div class="callout"><b>⌨️ Interactive program</b>Run it yourself and type the shown input. Lines you type are marked; the rest is the program talking.</div>' : L.simulated ? '<div class="callout"><b>🔍 Illustrated fragment</b>Key lines showing the idea — a simplified simulation for learning, not a whole runnable file. Full programs appear in early lessons; here the concept is the star.</div>' : '<div class="callout"><b>▶️ Run it yourself</b>Save exactly as <code>Main.java</code>, then <code>javac Main.java</code> and <code>java Main</code>. Every full program in this course works this way.</div>'}
  <div class="prose"><div class="callout"><b>💡 Why this output?</b>${esc(L.why)}</div></div></section>

  <section class="lesson-sec" aria-label="Experiment"><h2><span class="n">5</span> Interactive experiment</h2><p class="sub">Change values, watch consequences. Simulation — honest, not a real compiler.</p>
  ${simBox(L.sim)}</section>

  <section class="lesson-sec" aria-label="Mistakes"><h2><span class="n">6</span> Common mistakes (at least 3)</h2><p class="sub">Wrong, why, fixed — learn from realistic slips.</p>
  ${(L.mistakes || []).map((m, i) => `<div class="callout ${i === 0 ? '' : i === 1 ? 'warn' : 'err'}"><b>❌ Mistake ${i + 1}: ${esc(m.bad)}</b>Why: ${esc(m.why)}<br><b>✅ Fix:</b> <code>${esc(m.fix)}</code></div>`).join('')}</section>

  <section class="lesson-sec" aria-label="Practice"><h2><span class="n">7</span> Guided practice</h2><p class="sub">Hints first, solutions only after a real try.</p>
  ${(L.practices || []).map(p => `<div class="practice"><b>${esc(p.title)}</b><p>${esc(p.task)}</p>
  <button class="btn btn-ghost btn-small" data-hint-btn>Show hint</button> <button class="btn btn-ghost btn-small" data-sol-btn>Show solution</button>
  <div class="hint callout"><b>Hint</b>${esc(p.hint)}</div><div class="sol callout"><b>Solution</b>${esc(p.sol)}</div></div>`).join('')}</section>

  <section class="lesson-sec" aria-label="Quiz"><h2><span class="n">8</span> Lesson quiz</h2><p class="sub">3+ questions. Attempts saved locally; review queue learns your weak spots.</p>
  <div data-quiz></div></section>

  <section class="lesson-sec" aria-label="Summary"><h2><span class="n">9</span> Takeaways + next step</h2>
  <div class="prose"><ul>${(L.takeaways || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
  <div class="callout"><b>🧠 Recall challenge</b>${esc(L.recall)}</div>
  <div class="callout warn"><b>✏️ Do on your own</b>${esc(L.todo)}</div>
  <p><b>Related:</b> ${prereqLinks}${next ? ` · <a href="./${next.id}.html">Next: ${esc(next.title)} →</a>` : ''}</p>
  <button class="btn btn-primary" data-complete>Mark lesson complete</button></div></section>

  <nav class="prevnext" aria-label="Previous and next">${prev ? `<a class="pn" href="./${prev.id}.html"><span>← Previous</span><b>${esc(prev.title)}</b></a>` : '<span></span>'}${next ? `<a class="pn next" href="./${next.id}.html"><span>Next →</span><b>${esc(next.title)}</b></a>` : '<span></span>'}</nav>
<script type="module">
import {renderQuiz} from '../assets/js/quiz.js';
import {stepper,wireSimulators} from '../assets/js/anim.js';
renderQuiz(document.querySelector('[data-quiz]'),'${n.id}',${quizJson});
stepper(document.querySelector('[data-stepper]'),${animJson});
wireSimulators(document);
</script>`;
}

/* ---------- top-level pages ---------- */
function homeBody() {
  const totalQuiz = Object.values(LESSONS).reduce((a, l) => a + (l.quiz?.length || 0), 0);
  return `<div class="hero"><div class="hero-grid"><div class="hero-copy">
  <span class="eyebrow">Absolute beginners · ${esc(JAVA_VERSION)}</span>
  <h1 class="display">Learn Java like exploring a <em>science museum</em> — not reading a manual.</h1>
  <p class="lede">65 guided nodes, moving diagrams, tiny experiments, honest simulations, and 5 real projects. No account. Your progress lives in your browser.</p>
  <div class="hero-actions"><a class="btn btn-primary" href="lessons/prog-what.html">Start at the beginning →</a><a class="btn btn-ghost" href="graph.html">Explore the map</a></div>
  <div class="hero-stats"><div class="hstat"><b>${lessonIds.length}</b><span>lesson nodes</span></div><div class="hstat"><b>${totalQuiz}+</b><span>quiz questions</span></div><div class="hstat"><b>5</b><span>projects + capstone</span></div><div class="hstat"><b>0</b><span>accounts needed</span></div></div></div>
  <div class="hero-visual"><div class="terminal" aria-label="Example Java program"><div class="terminal-bar"><i></i><i></i><i></i><span style="margin-left:.4rem">Hello.java — ${esc(JAVA_VERSION)}</span></div>
  <pre><span class="tok-c">// your first victory</span>\n<span class="tok-k">public class</span> Hello {\n  <span class="tok-k">public static void</span> <span class="tok-f">main</span>(String[] args) {\n    System.out.<span class="tok-f">println</span>(<span class="tok-s">"My kitchen works!"</span>);\n  }\n}<span class="cursor"></span></pre></div>
  <div class="museum-strip"><div class="specimen"><b>🔬 Variables</b><span>labeled lunchboxes</span><div class="bar"><i style="width:72%"></i></div></div>
  <div class="specimen"><b>🔁 Loops</b><span>washing machine</span><div class="bar"><i style="width:55%"></i></div></div>
  <div class="specimen"><b>🏠 Objects</b><span>houses + addresses</span><div class="bar"><i style="width:38%"></i></div></div>
  <div class="specimen"><b>🧪 Tests</b><span>taste spoons</span><div class="bar"><i style="width:20%"></i></div></div></div></div></div></div>

  <div class="section-head"><div><h2>Your journey, six stages</h2><p>Follow the path, or roam the map. Locked nodes tell you exactly what to finish first.</p></div><a class="btn btn-ghost btn-small" href="graph.html">Open interactive map →</a></div>
  <div class="stages">${STAGES.filter(s => s.n <= 6).map(s => {
    const ids = order.filter(n => n.stage === s.n).map(n => n.id).join(',');
    const count = order.filter(n => n.stage === s.n).length;
    return `<a class="stage-card" style="--sc:${s.color}" href="stages/stage-${s.n}.html"><div class="stage-num">STAGE ${s.n} · ${count} NODES</div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><div class="stage-meta" data-stage-meter data-stage-meter="${ids}"></div></a>`; }).join('')}</div>

  <div class="section-head"><div><h2>Build real things</h2><p>Every project has milestones, starter code, tests, and a guided solution — never a spoiler.</p></div><a class="btn btn-ghost btn-small" href="projects.html">All projects →</a></div>
  <div class="stages">${PROJECTS.slice(0, 3).map(p => `<a class="stage-card" style="--sc:#1B1E23" href="projects/${p.id}.html"><div class="stage-num">${esc(p.time).toUpperCase()}</div><h3>${esc(p.title)}</h3><p>Needs: ${esc(p.needs)}</p></a>`).join('')}</div>

  <div class="lesson-sec"><h2><span class="n">?</span> How this course teaches</h2>
  <div class="prose"><p><b>Analogy first, then truth.</b> Lunchboxes, washing machines, and wedding bouncers open each idea — then we show where the analogy ends and real Java begins.</p>
  <p><b>Honest simulations.</b> This static site has no Java compiler hiding inside. Experiments are labeled visual simulators; the playground explains how to add a real execution service later.</p>
  <p><b>Kind tracking.</b> Quizzes give instant feedback, attempts stay local, and the review queue resurfaces what <i>you</i> missed. No scores, no leaderboards.</p></div></div>`;
}
function graphBody() {
  const list = STAGES.map(s => `<h3>Stage ${s.n} · ${esc(s.title)}</h3>` + order.filter(n => n.stage === s.n).map(n =>
    `<div class="result"><a href="lessons/${n.id}.html">${esc(n.title)}</a><div style="font-size:.82rem;color:var(--ink-2)">${esc(TYPE_LABEL[n.type])} · ${n.durationMinutes} min · needs: ${(n.prerequisites || []).map(p => nodeById[p]?.short || p).join(', ') || 'nothing'}</div></div>`).join('')).join('');
  return `<p class="crumbs"><a href="index.html">Home</a> › Course map</p>
  <h1 class="display" style="font-family:var(--font-display);font-size:2.2rem;margin:.4rem 0">The course map</h1>
  <p class="lede">Drag to pan, scroll to zoom, Tab + Enter to open nodes. ✓ done · ○ open · 🔒 needs prerequisites.</p>
  <div class="graph-wrap"><div class="graph-toolbar">
    <input type="search" id="gq" placeholder="Filter nodes… (e.g. loop)" aria-label="Filter nodes">
    <button class="iconbtn" id="zin">＋ Zoom in</button><button class="iconbtn" id="zout">－ Zoom out</button>
    <button class="iconbtn" id="zfit">⤢ Fit</button><button class="iconbtn" id="zreset">⟲ Reset</button>
    <span id="ginfo" style="font-size:.85rem;color:var(--ink-2)" role="status"></span></div>
  <div class="graph-viewport"><svg class="graph-svg" id="gsvg" role="img" aria-label="Interactive course graph"></svg></div>
  <div class="legend"><span><i style="background:#0E7C6B"></i>concept</span><span><i style="background:#2B6CB0"></i>demo</span><span><i style="background:#8A5A00"></i>practice</span><span><i style="background:#6C4FA1"></i>quiz/review</span><span><i style="background:#B94A2E"></i>project</span></div>
  <div id="gdetail" style="padding:1rem;border-top:1px solid var(--line)" aria-live="polite"><b>Select a node</b> to see details, prerequisites, and open it.</div></div>
  <h2 style="font-family:var(--font-display)">List view (same content, no graph needed)</h2>${list}
<script type="module">
import {renderGraph} from './assets/js/graph.js';
import {load} from './assets/js/progress.js';
const nodes=${jstr(NODES)};const edges=${jstr(edges())};
const svg=document.getElementById('gsvg'),info=document.getElementById('ginfo'),detail=document.getElementById('gdetail');
const ctl=renderGraph(svg,nodes,edges,{onSelect(n,locked){
  const p=load();const missing=(n.prerequisites||[]).filter(x=>!p.completed[x]);
  detail.innerHTML='<h3 style=margin:.2rem 0>'+n.title+'</h3><p style=margin:.2rem 0>'+(n.objectives||[]).join(' · ')+'</p>'+
  (locked?'<div class=callout><b>🔒 Locked.</b> Finish first: '+missing.map(m=>'<a href=lessons/'+m+'.html>'+m+'</a>').join(', ')+'</div>':'<div class=callout><b>✓ '+(p.completed[n.id]?'Completed':'Available')+'.</b> <a class="btn btn-primary btn-small" href=lessons/'+n.id+'.html>Open lesson →</a></div>');}});
document.getElementById('zin').onclick=()=>ctl.zoom(0.8);document.getElementById('zout').onclick=()=>ctl.zoom(1.25);
document.getElementById('zfit').onclick=()=>ctl.fit();document.getElementById('zreset').onclick=()=>ctl.reset();
document.getElementById('gq').oninput=e=>{const q=e.target.value.toLowerCase();info.textContent=q?nodes.filter(n=>(n.title+n.id).toLowerCase().includes(q)).length+' matches — open one from the list below.':'';};
</script>`;
}
function progressBody() {
  return `<p class="crumbs"><a href="index.html">Home</a> › My progress</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem;margin:.4rem 0">Progress + review queue</h1>
  <p class="lede">Stored only in this browser (localStorage). Export to move devices; clearing site data erases it.</p>
  <div class="lesson-sec"><h2><span class="n">%</span> Overall</h2><div data-ring style="font-size:1.2rem;font-weight:800"></div>
  <div style="display:flex;gap:.6rem;margin-top:.8rem;flex-wrap:wrap"><button class="btn btn-ghost btn-small" data-export>⬇ Export progress (JSON)</button>
  <label class="btn btn-ghost btn-small">⬆ Import <input type="file" data-import accept=".json" hidden></label>
  <button class="btn btn-ghost btn-small" id="wipe">Reset all progress</button></div></div>
  <div class="lesson-sec"><h2><span class="n">↻</span> Review queue — your weak spots first</h2><p class="sub">Questions you missed most, with links to relearn.</p><div id="rq"></div></div>
  <div class="lesson-sec"><h2><span class="n">✓</span> Continue where you left off</h2><div id="nextup"></div></div>
<script type="module">
import {load,stats} from './assets/js/progress.js';
const nodes=${jstr(NODES)};
const p=load();
const rq=document.getElementById('rq');
const entries=Object.entries(p.struggles||{}).sort((a,b)=>b[1]-a[1]).slice(0,12);
rq.innerHTML=entries.length?entries.map(([qid,c])=>{const [lessonId,...rest]=qid.split('-');const n=nodes.find(x=>x.id===lessonId);
  return '<div class=result><a href=lessons/'+lessonId+'.html#q-'+qid+'>Revisit: '+(n?n.title:lessonId)+'</a><div style=font-size:.82rem>missed '+c+'× · question '+qid+'</div></div>';}).join(''):'<p>No struggles yet — quizzes you miss will appear here. 🎉</p>';
const s=stats(nodes.map(n=>n.id));
const nxt=nodes.find(n=>!p.completed[n.id]&&(n.prerequisites||[]).every(x=>p.completed[x]));
document.getElementById('nextup').innerHTML=nxt?'<p>Recommended next: <a href=lessons/'+nxt.id+'.html><b>'+nxt.title+'</b></a> ('+nxt.durationMinutes+' min)</p><p>'+s.done+'/'+s.total+' done.</p>':'<p>🎓 All nodes complete! Visit the <a href=projects/capstone-tasks.html>capstone</a>.</p>';
document.getElementById('wipe').onclick=()=>{if(confirm('Erase all local progress?')){localStorage.clear();location.reload();}};
</script>`;
}
function glossaryBody() {
  return `<p class="crumbs"><a href="index.html">Home</a> › Glossary</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem">Beginner glossary</h1>
  <div class="searchbox"><input id="gq" type="search" placeholder="Filter terms… (e.g. loop)" aria-label="Filter glossary"></div>
  <div class="gloss-grid" id="gg">${GLOSSARY.map(([t, d]) => `<div class="gloss-card" data-t="${escAttr(t.toLowerCase())}"><b>${esc(t)}</b><p style="margin:.3rem 0 0">${esc(d)}</p></div>`).join('')}</div>
<script>document.getElementById('gq').oninput=e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('#gg .gloss-card').forEach(c=>c.style.display=c.dataset.t.includes(q)?'':'none');};</script>`;
}
function searchBody() {
  const idx = order.map(n => ({ id: n.id, title: n.title, stage: n.stage, text: ((LESSONS[n.id]?.intro || '') + ' ' + (LESSONS[n.id]?.takeaways || []).join(' ')).slice(0, 220) }));
  return `<p class="crumbs"><a href="index.html">Home</a> › Search</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem">Search the course</h1>
  <div class="searchbox"><input id="sq" type="search" placeholder="Try: loop, array, inheritance, file…" aria-label="Search lessons"></div><div id="res"></div>
<script>const idx=${jstr(idx)};
const res=document.getElementById('res');
function go(q){q=q.toLowerCase();const hits=idx.filter(x=>(x.title+x.text+x.id).toLowerCase().includes(q)).slice(0,20);
res.innerHTML=(q?'':'<p>Type to search '+idx.length+' nodes.</p>')+hits.map(h=>'<div class=result><a href=lessons/'+h.id+'.html>'+h.title+'</a><div style=font-size:.85rem;color:var(--ink-2)>Stage '+h.stage+' · '+h.text.slice(0,140)+'…</div></div>').join('')||'<p>No matches. Try “loop” or “array”.</p>';}
document.getElementById('sq').oninput=e=>go(e.target.value);go('');</script>
  <h2>Full index</h2>${STAGES.map(s => `<h3>Stage ${s.n} · ${esc(s.title)}</h3>` + order.filter(n => n.stage === s.n).map(n => `<div class="result"><a href="lessons/${n.id}.html">${esc(n.title)}</a></div>`).join('')).join('')}`;
}
function playgroundBody() {
  return `<p class="crumbs"><a href="index.html">Home</a> › Playground</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem">Java playground</h1>
  <div class="callout"><b>🔬 Honest label:</b> this static site has <b>no Java execution backend</b>. Below are scoped <b>visual simulators</b> (variables, math, loops, arrays). Architecture is ready: point <code>window.JAVA_RUNNER_URL</code> at an isolated execution service later without rewriting lessons.</div>
  <div class="playgrid"><div><h3>Scratchpad (saved locally)</h3>
  <textarea class="code" id="pad" aria-label="Code scratchpad">public class Hello {
  public static void main(String[] args) {
    System.out.println("Hi!");
  }
}</textarea>
  <div style="display:flex;gap:.5rem;margin-top:.5rem"><button class="btn btn-ghost btn-small" id="savepad">Save</button><button class="btn btn-ghost btn-small" id="resetpad">Reset sample</button><button class="btn btn-ghost btn-small" id="copypad">Copy</button></div></div>
  <div><h3>Simulators</h3>
  <div class="stage" data-sim="arith"><b>Math (int division!)</b><div style="display:flex;gap:.4rem;margin-top:.4rem"><input data-in value="5" size="5"><select data-in><option>+</option><option>-</option><option>*</option><option selected>/</option><option>%</option></select><input data-in value="2" size="5"><button data-go class="btn btn-dark btn-small">Run</button></div><div class="out" data-out>…</div></div>
  <div class="stage" data-sim="loop" style="margin-top:.6rem"><b>Loop tracer</b><div style="display:flex;gap:.4rem;margin-top:.4rem"><input data-in value="4" size="5"><button data-go class="btn btn-dark btn-small">Trace</button></div><div class="out" data-out>…</div></div>
  <div class="stage" data-sim="array" style="margin-top:.6rem"><b>Array doors 0-3</b><div style="display:flex;gap:.4rem;margin-top:.4rem"><input data-in value="1" size="5"><button data-go class="btn btn-dark btn-small">Open</button></div><div class="out" data-out>…</div></div>
  <div class="stage" data-sim="cond" style="margin-top:.6rem"><b>Branch check (≥18?)</b><div style="display:flex;gap:.4rem;margin-top:.4rem"><input data-in value="20" size="5"><button data-go class="btn btn-dark btn-small">Check</button></div><div class="out" data-out>…</div></div></div></div>
  <div class="lesson-sec"><h2><span class="n">★</span> Sample challenges</h2><div class="prose"><ol><li>Predict <code>7 / 3</code> as int, then simulate. Why not 2.33?</li><li>Trace a 5-cycle loop on paper, then check with the tracer.</li><li>Open array doors 0–4: which knocks crash and why?</li><li>Draft FizzBuzz (1–15) in the scratchpad; trace 3, 5, 15 by hand.</li></ol></div></div>
<script type="module">import {wireSimulators} from './assets/js/anim.js';wireSimulators(document);
const pad=document.getElementById('pad');pad.value=localStorage.getItem('jf-pad')||pad.value;
document.getElementById('savepad').onclick=()=>localStorage.setItem('jf-pad',pad.value);
document.getElementById('resetpad').onclick=()=>{pad.value='public class Hello {\\n  public static void main(String[] args) {\\n    System.out.println("Hi!");\\n  }\\n}';};
document.getElementById('copypad').onclick=()=>navigator.clipboard.writeText(pad.value);</script>`;
}
function helpBody() {
  return `<p class="crumbs"><a href="index.html">Home</a> › Help</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem">Help + accessibility</h1>
  <div class="prose"><p>Keyboard: Tab moves, Enter opens nodes, all buttons and quizzes work keyboard-only. Graph has a full list view — you never need the graph to learn.</p>
  <p>Motion: animations respect <code>prefers-reduced-motion</code> and never autoplay with sound. Each has step buttons + text captions.</p>
  <p>Zoom: layout works at 200% zoom and 360px wide. Code blocks scroll sideways and copy buttons keep text selectable.</p>
  <p>Progress: localStorage only, versioned (v1). Export JSON to move browsers. Clearing site data erases it — export first!</p>
  <p>Simple words: we explain every term before using it. Glossary links live in every lesson. Tell us (via your host) if a sentence confuses you.</p></div>`;
}
function projectsBody() {
  return `<p class="crumbs"><a href="index.html">Home</a> › Projects</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem">Projects: build real apps</h1>
  <p class="lede">Milestones unlock in order. Starter code, expected behavior, tests, hints, then guided solutions.</p>
  <div class="stages" style="grid-template-columns:1fr 1fr">${PROJECTS.map(p => `<a class="stage-card" style="--sc:#1B1E23" href="projects/${p.id}.html"><div class="stage-num">${esc(p.time).toUpperCase()} · NEEDS: ${esc(p.needs).toUpperCase()}</div><h3>${esc(p.title)}</h3><p>${esc(p.steps.length)} milestones · tests included</p></a>`).join('')}</div>`;
}
function projectDetail(p) {
  const n = nodeById[p.id];
  return `<p class="crumbs"><a href="../index.html">Home</a> › <a href="../projects.html">Projects</a> › ${esc(p.title)}</p>
  <h1 style="font-family:var(--font-display);font-size:2.1rem">${esc(p.title)}</h1>
  <div class="lesson-meta"><span class="chip">⏱ ${esc(p.time)}</span><span class="chip">Needs: ${esc(p.needs)}</span></div>
  <div class="lesson-sec"><h2><span class="n">1</span> Milestones (in order)</h2><ol class="prose">${p.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>
  <div class="lesson-sec"><h2><span class="n">2</span> Starter code</h2>${codeBlock(p.starter, null, [])}</div>
  <div class="lesson-sec"><h2><span class="n">3</span> Tests your app must pass</h2><div class="prose"><ul>${p.tests.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div></div>
  <div class="lesson-sec"><h2><span class="n">4</span> Hints, then solution</h2><div class="practice"><b>Stuck?</b><p>Re-read the linked lessons, trace one milestone on paper, test with the simplest input.</p>
  <button class="btn btn-ghost btn-small" data-hint-btn>Show hints</button> <button class="btn btn-ghost btn-small" data-sol-btn>Show guided solution</button>
  <div class="hint callout"><b>Hints</b>Split into the smallest milestone. Hardcode one example, then generalize. Print intermediate values.</div>
  <div class="sol callout"><b>Guided solution</b>${esc(p.solution)}</div></div>
  <button class="btn btn-primary" data-complete>Mark project complete</button></div>`;
}
function stagePage(s) {
  const ns = order.filter(n => n.stage === s.n);
  return `<p class="crumbs"><a href="../index.html">Home</a> › Stage ${s.n}</p>
  <h1 style="font-family:var(--font-display);font-size:2.2rem">Stage ${s.n}: ${esc(s.title)}</h1>
  <p class="lede">${esc(s.desc)}</p>
  ${ns.map((n, i) => `<div class="result"><a href="../lessons/${n.id}.html">${String(i + 1).padStart(2, '0')} · ${esc(n.title)}</a><div style="font-size:.85rem;color:var(--ink-2)">${esc(TYPE_LABEL[n.type])} · ${n.durationMinutes} min · ${(n.objectives || []).slice(0, 2).join(' · ')}</div></div>`).join('')}`;
}

/* ---------- build ---------- */
rmSync(dist, { recursive: true, force: true });
for (const d of ['', 'lessons', 'projects', 'stages', 'assets/css', 'assets/js']) mkdirSync(join(dist, d), { recursive: true });
cpSync(join(root, 'src/css/main.css'), join(dist, 'assets/css/main.css'));
for (const f of ['app.js', 'progress.js', 'quiz.js', 'anim.js', 'graph.js']) cpSync(join(root, 'src/js', f), join(dist, 'assets/js', f));
writeFileSync(join(dist, 'assets/data.json'), JSON.stringify({ nodes: NODES, edges: edges(), stages: STAGES, version: JAVA_VERSION }));

const write = (rel, html) => { writeFileSync(join(dist, rel), html); console.log('wrote', rel); };
write('index.html', pageShell({ prefix: '', title: 'Learn Java from zero', current: 'home', body: homeBody() }));
write('graph.html', pageShell({ prefix: '', title: 'Course map', current: 'graph', body: graphBody() }));
write('progress.html', pageShell({ prefix: '', title: 'My progress', current: 'progress', body: progressBody() }));
write('glossary.html', pageShell({ prefix: '', title: 'Glossary', current: 'gloss', body: glossaryBody() }));
write('search.html', pageShell({ prefix: '', title: 'Search + index', current: 'search', body: searchBody() }));
write('playground.html', pageShell({ prefix: '', title: 'Playground', current: 'play', body: playgroundBody() }));
write('help.html', pageShell({ prefix: '', title: 'Help', current: 'help', body: helpBody() }));
write('projects.html', pageShell({ prefix: '', title: 'Projects', current: 'projects', body: projectsBody() }));
for (const s of STAGES) write(`stages/stage-${s.n}.html`, pageShell({ prefix: '../', title: `Stage ${s.n}: ${s.title}`, current: 'home', body: stagePage(s) }));
let missing = [];
for (const n of order) {
  if (n.type === 'project') continue; // projects get project pages below
  const L = LESSONS[n.id];
  if (!L) { missing.push(n.id); continue; }
  write(`lessons/${n.id}.html`, pageShell({ prefix: '../', title: n.title, desc: L.intro, current: 'lesson', lessonId: n.id, body: lessonBody(n, L) }));
}
for (const p of PROJECTS) write(`projects/${p.id}.html`, pageShell({ prefix: '../', title: p.title, current: 'projects', lessonId: p.id, body: projectDetail(p) }));
write('error.html', pageShell({ prefix: '', title: 'Not found', current: '', body: `<h1>Hmm, that page wandered off (404)</h1><p><a href="index.html">Back to course home →</a> · <a href="search.html">Search lessons</a></p>` }));
writeFileSync(join(dist, 'sitemap.txt'), ['index.html', 'graph.html', 'progress.html', 'glossary.html', 'search.html', 'playground.html', 'help.html', 'projects.html', ...order.filter(n => n.type !== 'project').map(n => `lessons/${n.id}.html`), ...PROJECTS.map(p => `projects/${p.id}.html`)].join('\n'));
if (missing.length) { console.error('MISSING CONTENT FOR:', missing.join(', ')); process.exit(1); }
console.log(`\nDone: ${order.length} lessons + ${PROJECTS.length} projects.`);
