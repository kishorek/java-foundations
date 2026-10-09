/* Reusable quiz engine: renders questions, shuffles options, tracks locally */
import {recordQuiz} from './progress.js';
export function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
export function renderQuiz(el,lessonId,questions){
  el.innerHTML='';
  const wrap=document.createElement('div');wrap.className='quiz-list';
  questions.forEach((q,qi)=>{
    const d=document.createElement('div');d.className='quiz-q';d.id=`q-${q.id}`;
    const f=document.createElement('fieldset');
    const lg=document.createElement('legend');lg.textContent=`Q${qi+1}. ${q.prompt}`;f.appendChild(lg);
    if(q.code){const pre=document.createElement('pre');pre.style.cssText='background:#14181D;color:#E8E4D8;border-radius:10px;padding:.7rem .9rem;overflow:auto;font-family:var(--font-mono);font-size:.82rem';pre.textContent=q.code;f.appendChild(pre);}
    const fb=document.createElement('div');fb.className='feedback';fb.setAttribute('role','status');
    const opts=q.shuffle===false?q.options:shuffle(q.options);
    const name=`${lessonId}-${q.id}`;
    const inputType=q.multi?'checkbox':'radio';
    opts.forEach(o=>{
      const lab=document.createElement('label');lab.className='opt';
      const inp=document.createElement('input');inp.type=inputType;inp.name=name;inp.value=o.t;
      const sp=document.createElement('span');sp.textContent=o.t;
      lab.appendChild(inp);lab.appendChild(sp);f.appendChild(lab);
    });
    const btn=document.createElement('button');btn.className='btn btn-dark btn-small';btn.style.marginTop='.5rem';btn.textContent='Check answer';
    btn.onclick=()=>{
      const checked=[...f.querySelectorAll('input:checked')].map(i=>i.value).sort();
      const correct=q.options.filter(o=>o.ok).map(o=>o.t).sort();
      const ok=JSON.stringify(checked)===JSON.stringify(correct);
      fb.className='feedback '+(ok?'ok':'no');
      fb.innerHTML=(ok?'<b>Correct.</b> ':'<b>Not quite.</b> ')+q.explain;
      recordQuiz(lessonId,q.id,ok);
      d.dispatchEvent(new CustomEvent('jf-quiz',{bubbles:true,detail:{lessonId,qid:q.id,ok}}));
    };
    const retry=document.createElement('button');retry.className='btn btn-ghost btn-small';retry.style.margin='.5rem 0 0 .5rem';retry.textContent='Retry';
    retry.onclick=()=>{f.querySelectorAll('input').forEach(i=>i.checked=false);fb.className='feedback';fb.textContent='';};
    f.appendChild(fb);d.appendChild(f);d.appendChild(btn);d.appendChild(retry);wrap.appendChild(d);
  });
  el.appendChild(wrap);
}
