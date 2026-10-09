/* SVG course graph: pan/zoom, keyboard nav, locked reasoning, list fallback */
import {load} from './progress.js';
function statusOf(id,p){if(p.completed[id])return'completed';return'available';}
export function renderGraph(svgEl,nodes,edges,{onSelect}={}){
  const NS='http://www.w3.org/2000/svg';
  svgEl.innerHTML='';
  const p=load();
  const cols={concept:'#0E7C6B',demo:'#2B6CB0',practice:'#8A5A00',quiz:'#6C4FA1',project:'#B94A2E',review:'#4F7A3A'};
  const W=1200,H=760;svgEl.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const g=document.createElementNS(NS,'g');g.setAttribute('class','viewport');svgEl.appendChild(g);
  const byStage={};nodes.forEach(n=>{(byStage[n.stage]=byStage[n.stage]||[]).push(n);});
  const pos={};const stages=Object.keys(byStage).sort();
  const colW=W/(Math.max(...stages.map(s=>byStage[s].length))+1.4);
  stages.forEach((s,si)=>{const arr=byStage[s];const rowH=H/(arr.length+1);
    arr.forEach((n,ri)=>{pos[n.id]={x:colW*(ri+1)+si*24,y:rowH*(ri+1)};});});
  edges.forEach(e=>{if(!pos[e.from]||!pos[e.to])return;const a=pos[e.from],b=pos[e.to];
    const l=document.createElementNS(NS,'line');l.setAttribute('x1',a.x);l.setAttribute('y1',a.y);l.setAttribute('x2',b.x);l.setAttribute('y2',b.y);l.setAttribute('class','glink');g.appendChild(l);});
  let sel=null;
  nodes.forEach(n=>{
    const locked=(n.prerequisites||[]).some(pr=>!p.completed[pr]);
    const st=locked?'locked':statusOf(n.id,p);
    const {x,y}=pos[n.id];
    const gn=document.createElementNS(NS,'g');gn.setAttribute('class',`gnode ${locked?'locked':''}`);gn.setAttribute('transform',`translate(${x},${y})`);gn.setAttribute('tabindex','0');gn.setAttribute('role','button');gn.setAttribute('aria-label',`${n.title}. ${locked?'Locked':'Available'}. Stage ${n.stage}`);
    const halo=document.createElementNS(NS,'circle');halo.setAttribute('r','26');halo.setAttribute('class','halo');gn.appendChild(halo);
    const c=document.createElementNS(NS,'circle');c.setAttribute('r','17');c.setAttribute('class','disk');
    c.setAttribute('fill',st==='completed'?cols[n.type]||'#0E7C6B':'var(--surface)');
    c.setAttribute('stroke',cols[n.type]||'#0E7C6B');gn.appendChild(c);
    const ic=document.createElementNS(NS,'text');ic.setAttribute('text-anchor','middle');ic.setAttribute('dy','.36em');ic.setAttribute('font-size','13');ic.setAttribute('fill',st==='completed'?'#fff':(cols[n.type]||'#0E7C6B'));
    ic.textContent=st==='completed'?'✓':({concept:'●',demo:'▶',practice:'✎',quiz:'?',project:'★',review:'↻'}[n.type]||'●');gn.appendChild(ic);
    const t=document.createElementNS(NS,'text');t.setAttribute('y','34');t.setAttribute('text-anchor','middle');t.setAttribute('font-size','10.5');t.setAttribute('fill','var(--ink)');t.textContent=n.short||n.title.slice(0,22);gn.appendChild(t);
    const open=()=>{onSelect&&onSelect(n,locked);gn.querySelector('.disk').classList.add('sel');};
    gn.addEventListener('click',open);
    gn.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
    g.appendChild(gn);
  });
  // pan/zoom
  let vb={x:0,y:0,w:W,h:H};
  const apply=()=>svgEl.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  let drag=null;
  svgEl.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,vx:vb.x,vy:vb.y};svgEl.setPointerCapture(e.pointerId);});
  svgEl.addEventListener('pointermove',e=>{if(!drag)return;const s=vb.w/svgEl.clientWidth;vb.x=drag.vx-(e.clientX-drag.x)*s;vb.y=drag.vy-(e.clientY-drag.y)*s;apply();});
  svgEl.addEventListener('pointerup',()=>drag=null);
  svgEl.addEventListener('wheel',e=>{e.preventDefault();const f=e.deltaY>0?1.12:0.89;vb.w=Math.min(2000,Math.max(300,vb.w*f));vb.h=vb.w*(H/W);apply();},{passive:false});
  return{reset(){vb={x:0,y:0,w:W,h:H};apply();},fit(){vb={x:0,y:0,w:W,h:H};apply();},zoom(f){vb.w=Math.min(2000,Math.max(300,vb.w*f));vb.h=vb.w*(H/W);apply();}};
}
