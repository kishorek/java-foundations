/* Global app wiring: theme, drawer, progress ring, copy, practice, completion */
import {load,save,markVisited,completeLesson,uncompleteLesson,stats,exportJSON,importJSON} from './progress.js';
export function initTheme(){
  const root=document.documentElement;
  const saved=(load().theme)||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  root.dataset.theme=saved;
  document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';const p=load();p.theme=root.dataset.theme;save(p);});
}
export function initChrome(allIds=[]){
  document.querySelectorAll('[data-menu]').forEach(b=>b.onclick=()=>document.querySelector('.sidenav')?.classList.toggle('open'));
  document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{const t=b.dataset.copy;try{await navigator.clipboard.writeText(t);b.textContent='Copied!';setTimeout(()=>b.textContent='Copy',1200);}catch{}});
  document.querySelectorAll('.practice [data-hint-btn]').forEach(b=>b.onclick=()=>b.closest('.practice').classList.toggle('open-hint'));
  document.querySelectorAll('.practice [data-sol-btn]').forEach(b=>b.onclick=()=>b.closest('.practice').classList.toggle('open-sol'));
  document.querySelectorAll('[data-export]').forEach(b=>b.onclick=()=>exportJSON());
  document.querySelectorAll('[data-import]').forEach(b=>b.onchange=e=>{if(e.target.files[0])importJSON(e.target.files[0]).then(()=>location.reload());});
  paintRings(allIds);
  document.addEventListener('jf-progress',()=>paintRings(allIds));
  const lid=document.body.dataset.lesson;
  if(lid){markVisited(lid);wireComplete(lid);}
}
function ringSVG(pct,size=28){const r=(size-6)/2,c=2*Math.PI*r,off=c*(1-pct/100);
  return `<svg class="progress-ring" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="3"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--teal)" stroke-width="3" stroke-dasharray="${c}" stroke-dashoffset="${off}" stroke-linecap="round" transform="rotate(-90 ${size/2} ${size/2})"/></svg>`;}
function paintRings(allIds){
  if(!allIds.length)return;const s=stats(allIds);
  document.querySelectorAll('[data-ring]').forEach(el=>{el.innerHTML=`${ringSVG(s.pct)}<span>${s.pct}% · ${s.done}/${s.total}</span>`;});
  document.querySelectorAll('[data-stage-meter]').forEach(el=>{const ids=(el.dataset.stageMeter||'').split(',').filter(Boolean);const st=stats(ids);el.innerHTML=`<div class="meter"><i style="width:${st.pct}%"></i></div><span>${st.done}/${st.total}</span>`;});
}
function wireComplete(lid){
  const btn=document.querySelector('[data-complete]');
  if(!btn)return;
  const paint=()=>{const done=load().completed[lid];btn.textContent=done?'✓ Completed — click to undo':'Mark lesson complete';btn.classList.toggle('primary',!done);};
  btn.onclick=()=>{if(load().completed[lid])uncompleteLesson(lid);else completeLesson(lid);paint();};
  paint();
}
