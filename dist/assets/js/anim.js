/* Lightweight deterministic animations + simulators. No external libs. */
export function stepper(el,steps,{autoplay=false,interval=1600}={}){
  let i=0,timer=null;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cap=el.querySelector('[data-cap]');const body=el.querySelector('[data-body]');
  function show(n){i=Math.max(0,Math.min(steps.length-1,n));const s=steps[i];if(cap)cap.textContent=`Step ${i+1} of ${steps.length}: ${s.caption}`;if(body)body.innerHTML=s.html;[...el.querySelectorAll('[data-goto]')].forEach(b=>b.disabled=false);}
  function play(){if(timer||reduced)return;timer=setInterval(()=>{if(i>=steps.length-1){stop();return;}show(i+1);},interval);}
  function stop(){clearInterval(timer);timer=null;}
  el.querySelector('[data-prev]')?.addEventListener('click',()=>{stop();show(i-1);});
  el.querySelector('[data-next]')?.addEventListener('click',()=>{stop();show(i+1);});
  el.querySelector('[data-play]')?.addEventListener('click',e=>{if(timer){stop();e.target.textContent='Play';}else{play();e.target.textContent='Pause';}});
  el.querySelector('[data-restart]')?.addEventListener('click',()=>{stop();show(0);});
  show(0);if(autoplay&&!reduced)play();
  return{show};
}
/* Tiny Java-expression simulator used by experiments (integers, doubles, strings, booleans) */
export function simEval(kind,inputs){
  try{
    if(kind==='arith'){const[a,op,b]=inputs;const x=Number(a),y=Number(b);
      if(op==='/'){if(y===0)return'Error: division by zero (ArithmeticException in Java for int / 0).';if(Number.isInteger(x)&&Number.isInteger(y))return String(Math.trunc(x/y))+'  (int division truncates!)';return String(x/y);}
      if(op==='+')return String(x+y);if(op==='-')return String(x-y);if(op==='*')return String(x*y);if(op==='%')return String(x%y);}
    if(kind==='concat'){const[a,b]=inputs;return String(a)+String(b);}
    if(kind==='cond'){const[v]=inputs;const n=Number(v);return n+' → '+(n>=18?'adult branch (true)':'minor branch (false)');}
    if(kind==='loop'){const[n]=inputs;let N=Math.max(0,Math.min(12,parseInt(n)||0));let out=[];for(let k=1;k<=N;k++)out.push(`iteration ${k}: wash, rinse`);out.push(`done after ${N} checks`);return out.join('\n');}
    if(kind==='array'){const[idx]=inputs;const arr=[10,20,30,40];const k=Number(idx);if(!Number.isInteger(k)||k<0||k>=arr.length)return`Index ${idx} → ArrayIndexOutOfBoundsException! Valid: 0..${arr.length-1}`;return`arr[${k}] = ${arr[k]}`;}
  }catch(e){return'Could not simulate: '+e.message;}
  return'';
}
export function wireSimulators(root){
  root.querySelectorAll('[data-sim]').forEach(box=>{
    const kind=box.dataset.sim;const out=box.querySelector('[data-out]');
    const go=()=>{const vals=[...box.querySelectorAll('[data-in]')].map(el=>el.value);if(out)out.textContent=simEval(kind,vals);};
    box.querySelectorAll('[data-in]').forEach(el=>el.addEventListener('input',go));
    box.querySelector('[data-go]')?.addEventListener('click',go);go();
  });
}
