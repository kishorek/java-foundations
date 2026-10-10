/* Fluid topic renderer: lesson data + per-topic layout -> reference-style page. */
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escA = s => esc(s).replace(/"/g, '&quot;');
const LTR = { a: 0, b: 1, c: 2, d: 3, e: 4 };

function highlight(code) {
  let h = esc(code);
  h = h.replace(/(\/\/[^\n]*)/g, '\u0001$1\u0002');
  h = h.replace(/(&quot;.*?&quot;|".*?"|'.*?')/g, '\u0003$1\u0004');
  const kw = /\b(public|class|static|void|new|return|if|else|for|while|true|false|null|switch|case|break|continue|do|import|package|try|catch|finally|throw|throws|extends|implements|interface|abstract|private|protected|this|super|final|var)\b/g;
  h = h.replace(kw, '<span class="kw">$1</span>');
  h = h.replace(/\b(byte|short|int|long|float|double|boolean|char|String)\b/g, '<span class="type">$1</span>');
  h = h.replace(/(^|[\s(=:;,])(-?\d[\d_]*(\.\d+)?[Lf]?)(\s|$|;)/g, '$1<span class="num">$2</span>$4');
  h = h.split('\u0001').join('<span class="com">').split('\u0002').join('</span>');
  h = h.split('\u0003').join('<span class="str">').split('\u0004').join('</span>');
  return h;
}

function block(b, lesson) {
  switch (b.t) {
    case 'analogy': return `<div class="analogy"><div class="emoji">${b.emoji || '💡'}</div><p>${b.html}</p></div>`;
    case 'text': return `<div class="card"><p style="margin:0">${b.html}</p></div>`;
    case 'updater': return `<div class="card"><h3>${esc(b.title)}</h3><p class="muted">${esc(b.desc)}</p>
      <div data-updater data-min="${b.min ?? 0}" data-max="${b.max ?? 120}" data-unit="${escA(b.unit || '')}" data-mean-tpl="${escA(b.meanTpl || '{v}')}" data-ok-tpl="${escA(b.okTpl || 'Now contains {v}.')}">
      <div class="visual"><div class="slot"><div class="slot-title">Label · name</div><div class="slot-value" style="color:var(--blue)">${esc(b.varName)}</div><small>${esc(b.varNote || 'The name in code')}</small></div>
      <div class="slot"><div class="slot-title">${esc(b.slotTitle || 'Inside the box · value')}</div><div class="slot-value" data-u-val>${esc(b.initial)}</div><small data-u-mean>${esc(b.mean || '')}</small></div></div>
      <div class="controls"><input data-u-in type="number" value="${escA(b.initial)}" aria-label="${escA(b.inputLabel || 'Enter a value')}"><button class="btn" data-u-go>${esc(b.goLabel || 'Put value in box')}</button></div>
      <div class="feedback" data-u-fb role="status"></div></div></div>`;
    case 'typegrid': return `<div class="type-grid">${b.cards.map(c => `<div class="type-card"><div class="big">${c.emoji}</div><h4><code>${esc(c.type)}</code></h4><p>${c.desc}</p><span class="tag">Example: ${esc(c.example)}</span></div>`).join('')}</div>`;
    case 'matcher': return `<div class="card"><h3>${esc(b.title)}</h3><p class="muted">${esc(b.desc)}</p>
      <div data-matcher data-map="${escA(JSON.stringify(b.map))}">
      <div class="controls"><select data-m-val aria-label="Choose a value">${b.values.map(v => `<option value="${escA(v.v)}">${esc(v.label)}</option>`).join('')}</select><button class="btn" data-m-go>Check my choice</button></div>
      <div class="controls"><select data-m-type aria-label="Choose a type"><option value="">Choose a type…</option>${b.types.map(t => `<option>${esc(t)}</option>`).join('')}</select></div>
      <div class="feedback" data-m-fb role="status"></div></div></div>`;
    case 'builder': return `<div class="card"><h3>${esc(b.title)}</h3><p class="muted">${esc(b.desc)}</p>
      <div data-builder><div class="controls"><select data-b-type aria-label="Type">${b.types.map(t => `<option value="${escA(t.v)}">${esc(t.label)}</option>`).join('')}</select></div>
      <div class="controls"><input data-b-name value="${escA(b.name || 'score')}" aria-label="Variable name"><input data-b-val value="${escA(b.value || '100')}" aria-label="Value"></div>
      <div class="code-label"><span>Your Java statement</span><button class="copy" data-b-copy>Copy code</button></div>
      <pre class="code" data-b-code></pre><div class="feedback show" data-b-fb style="background:var(--blue2);color:#2e46ad"></div></div></div>`;
    case 'code': { const src = b.code || (b.fromLesson ? lesson.code || '' : ''); return `${b.label ? `<div class="code-label"><span>${esc(b.label)}</span>${b.copy === false ? '' : `<button class="copy" data-copy="${escA(src)}">Copy code</button>`}</div>` : ''}<pre class="code">${highlight(src)}</pre>${b.gloss ? `<div class="callout">${b.gloss}</div>` : ''}`; }
    case 'codelab': { const src = b.code || (b.fromLesson ? lesson.code || '' : ''); return `<div class="card" data-lab><div class="code-label"><span>${esc(b.label || 'Program')}</span><span>${esc(b.hint || 'Read each line in order')}</span></div>
      <pre class="code">${highlight(src)}</pre><p>${b.about || ''}</p>
      <button class="btn" data-lab-go>▶ Run the program</button>
      <div class="lab-result" data-lab-res style="display:none;margin-top:18px"><div class="visual">${b.slots.map(s => `<div class="slot"><div class="slot-title">${esc(s.title)}</div><div class="slot-value"${s.good ? ' style="color:var(--green)"' : ''}>${esc(s.value)}</div><small>${esc(s.note || '')}</small></div>`).join('')}</div>
      ${b.note ? `<div class="feedback show good">${b.note}</div>` : ''}</div></div>`; }
    case 'mistake': return `<div class="card" data-mistake data-m-name="${escA(b.qname)}" data-m-good="${escA(b.good)}" data-m-ok="${escA(b.okText)}" data-m-no="${escA(b.noText)}"><h3>${esc(b.title || 'Spot the mistake')}</h3><p>${esc(b.q)}</p>
      ${b.code ? `<pre class="code">${highlight(b.code)}</pre>` : ''}
      <div class="options">${b.options.map(o => `<label class="option"><input type="radio" name="${escA(b.qname)}" value="${escA(o.v)}"> ${o.html}</label>`).join('')}</div>
      <button class="btn" data-m-go style="margin-top:12px">Check answer</button><div class="feedback" data-m-fb role="status"></div></div>`;
    case 'reveal': return `<div class="card"><h3>${esc(b.title)}</h3><p class="muted">${esc(b.desc || '')}</p><button class="reveal-btn" data-reveal="${escA(b.id)}">${esc(b.label || 'Show me')}</button><div class="reveal-body" id="${escA(b.id)}">${b.html}</div></div>`;
    case 'callout': return `<div class="callout${b.kind ? ' ' + b.kind : ''}">${b.html}</div>`;
    case 'facts': return `<div class="card"><h3>${esc(b.title)}</h3><table class="facts"><tbody>${b.rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</tbody></table></div>`;
    case 'quiz': {
      const qs = b.questions || lesson.quiz || [];
      return `<div class="card" data-quiz><div class="quiz-q" style="display:none"></div>${qs.map((q, i) => {
        const letters = q.options.map((_, k) => 'abcde'[k]);
        const correct = letters[q.options.findIndex(o => o.ok)];
        return `<div class="quiz-q" data-qname="q${i + 1}" data-answer="${correct}"><p>${i + 1}. ${esc(q.prompt)}</p>${q.code ? `<pre class="code">${highlight(q.code)}</pre>` : ''}<div class="options">${q.options.map((o, k) => `<label class="option"><input type="radio" name="tq${i}" value="${letters[k]}"> ${esc(o.t)}</label>`).join('')}</div><div class="quiz-explain" data-text="${escA(q.explain)}"></div></div>`;
      }).join('')}
      <button class="btn green" data-q-go>Check my score</button><div class="feedback" data-q-fb role="status"></div>
      <div class="celebrate" data-q-cel><div class="big">🎉</div><h3>${esc(b.celTitle || 'Level unlocked!')}</h3><p>${esc(b.celText || 'You understood the core idea. Onward!')}</p></div></div>`;
    }
    case 'reference': return `<div class="card"><h3>${esc(b.title || 'Your pocket reference')}</h3><div class="pill-row">${b.pills.map(p => `<span class="pill"><code>${esc(p.code)}</code> → ${esc(p.label)}</span>`).join('')}</div>${b.next ? `<p class="muted tiny" style="margin-bottom:0">${b.next}</p>` : ''}</div>`;
    default: return '';
  }
}

export function renderTopic(node, lesson, layout, opts = {}) {
  const { prefix = '../', next = null, prev = null } = opts;
  const steps = layout.steps;
  const chips = layout.chips || [`⏱ ${node.durationMinutes} min`, '🧠 No experience needed', '🧪 Interactive'];
  const stepsHtml = steps.map((s, i) => `
    <section class="lesson${i === 0 ? ' active' : ''}" id="step${i}" aria-label="${escA(s.nav)}">
      <div class="section-head"><div class="kicker">${esc(s.kicker || ('Step ' + (i + 1)))}</div><h2>${esc(s.h2)}</h2>${s.sub ? `<p>${esc(s.sub)}</p>` : ''}</div>
      ${s.blocks.map(bl => block(bl, lesson)).join('\n')}
      <div class="lesson-nav">${i > 0 ? `<button class="btn secondary" data-prev>← Back</button>` : '<span></span>'}${i < steps.length - 1 ? `<button class="btn" data-next>Next: ${esc(steps[i + 1].nav)} →</button>` : `${next ? `<a class="btn" href="./${next.id}.html" style="text-decoration:none">Next topic: ${esc(next.short || next.title)} →</a>` : '<button class="btn" id="restart">Start again ↻</button>'}`}</div>
    </section>`).join('\n');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(node.title)} · Java Foundations</title>
<meta name="description" content="${escA(lesson.intro || node.title)}">
<link rel="stylesheet" href="${prefix}assets/css/topic.css">
</head><body data-topic="${node.id}">
<a class="skip" href="#main">Skip to content</a>
<header class="topbar"><a class="brand" href="${prefix}index.html">☕ Java<span>Foundations</span></a>
<div class="top-links"><a href="${prefix}graph.html">Map</a><a href="${prefix}progress.html">Progress</a></div>
<div class="progress-wrap"><span id="progressText" class="tiny muted">Step 1 of ${steps.length}</span><div class="progress"><div id="progressBar"></div></div></div></header>
<div class="layout"><aside class="sidebar" aria-label="This topic's steps"><div class="side-title">This topic · ${steps.length} steps</div>
${steps.map((s, i) => `<button class="navitem${i === 0 ? ' active' : ''}" data-go="${i}"><span class="num">${i + 1}</span> ${esc(s.nav)}</button>`).join('')}
<div class="side-note">💡 <strong>Beginner tip</strong><br>${layout.tip || 'Understand the idea, play with the widgets, and let the examples do the heavy lifting.'}</div>
<div class="side-note">📚 <strong>Needs first</strong><br>${(node.prerequisites || []).length ? 'See the course map for print-friendly prerequisites.' : 'Nothing — start here!'}</div></aside>
<main id="main"><section class="hero"><div class="eyebrow">Stage ${node.stage} · ${esc(layout.eyebrow || 'Java foundations')}</div><h1>${esc(layout.heroTitle || node.title)}</h1><p>${esc(layout.heroDesc || lesson.intro || '')}</p><div class="hero-chips">${chips.map(c => `<span class="chip">${esc(c)}</span>`).join('')}</div></section>
${stepsHtml}
<div class="footer">Made for curious beginners. ${prev ? `<a href="./${prev.id}.html">← ${esc(prev.short || prev.title)}</a> · ` : ''}<a href="${prefix}graph.html">Course map</a> · <a href="${prefix}glossary.html">Glossary</a></div></main></div>
<script src="${prefix}assets/js/topic.js"></script>
</body></html>`;
}
