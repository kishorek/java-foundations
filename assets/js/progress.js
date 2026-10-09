/* Progress store — localStorage, versioned, export/import */
const KEY='jf-progress-v1';
const blank=()=>({v:1,completed:{},quiz:{},visits:{},struggles:{},theme:null,updated:new Date().toISOString()});
export function load(){try{const r=localStorage.getItem(KEY);if(!r)return blank();const p=JSON.parse(r);if(!p||p.v!==1)return blank();return p;}catch{return blank();}}
export function save(p){p.updated=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(p));}catch{} document.dispatchEvent(new CustomEvent('jf-progress',{detail:p}));}
export function markVisited(id){const p=load();p.visits[id]=(p.visits[id]||0)+1;save(p);}
export function completeLesson(id){const p=load();p.completed[id]=new Date().toISOString();save(p);}
export function uncompleteLesson(id){const p=load();delete p.completed[id];save(p);}
export function isComplete(id){return !!load().completed[id];}
export function recordQuiz(lessonId,qid,ok){const p=load();p.quiz[lessonId]=p.quiz[lessonId]||{};const e=p.quiz[lessonId][qid]=p.quiz[lessonId][qid]||{a:0,c:0};e.a++;if(ok)e.c++;else{p.struggles[qid]=(p.struggles[qid]||0)+1;}save(p);}
export function stats(allIds){const p=load();const done=allIds.filter(id=>p.completed[id]);return{total:allIds.length,done:done.length,pct:allIds.length?Math.round(done.length/allIds.length*100):0,map:p};}
export function exportJSON(){const b=new Blob([localStorage.getItem(KEY)||JSON.stringify(blank())],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='java-foundations-progress.json';a.click();}
export function importJSON(file){return file.text().then(t=>{JSON.parse(t);localStorage.setItem(KEY,t);document.dispatchEvent(new CustomEvent('jf-progress'));});}
export function struggles(){return load().struggles||{};}
