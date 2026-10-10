/* Topic toolkit — classic script (file:// safe). Steps nav, widgets, quiz, progress. */
(function(){
"use strict";
var body=document.body, topicId=body.getAttribute('data-topic')||'topic';
var lessons=Array.prototype.slice.call(document.querySelectorAll('.lesson'));
var navItems=Array.prototype.slice.call(document.querySelectorAll('.navitem'));
var store={viewed:[],done:false};
try{store=Object.assign(store,JSON.parse(localStorage.getItem('jf-topic-'+topicId)||'{}'));}catch(e){}
function save(){try{localStorage.setItem('jf-topic-'+topicId,JSON.stringify(store));}catch(e){}}
function markGlobal(id){try{var p=JSON.parse(localStorage.getItem('jf-progress-v1')||'null')||{v:1,completed:{},quiz:{},visits:{},struggles:{}};p.completed[id]=new Date().toISOString();p.visits[id]=(p.visits[id]||0)+1;localStorage.setItem('jf-progress-v1',JSON.stringify(p));}catch(e){}}
function recordQuiz(lid,qid,ok){try{var p=JSON.parse(localStorage.getItem('jf-progress-v1')||'null')||{v:1,completed:{},quiz:{},visits:{},struggles:{}};p.quiz[lid]=p.quiz[lid]||{};var e=p.quiz[lid][qid]=p.quiz[lid][qid]||{a:0,c:0};e.a++;if(ok)e.c++;else{p.struggles[lid+'-'+qid]=(p.struggles[lid+'-'+qid]||0)+1;}localStorage.setItem('jf-progress-v1',JSON.stringify(p));}catch(e){}}
var current=0;
function paint(){
  lessons.forEach(function(el,i){el.classList.toggle('active',i===current);});
  navItems.forEach(function(el,i){el.classList.toggle('active',i===current);el.classList.toggle('done',store.viewed.indexOf(i)>=0);});
  var t=document.getElementById('progressText'),b=document.getElementById('progressBar');
  if(t)t.textContent='Step '+(current+1)+' of '+lessons.length;
  if(b)b.style.width=(store.viewed.length/lessons.length*100)+'%';
  try{window.scrollTo({top:0,behavior:document.body.classList.contains('rm')?'auto':'smooth'});}catch(e){window.scrollTo(0,0);}
}
function show(n){current=Math.max(0,Math.min(lessons.length-1,n));if(store.viewed.indexOf(current)<0)store.viewed.push(current);save();paint();if(current===lessons.length-1&&store.viewed.length>=lessons.length-1){markGlobal(topicId);}}
navItems.forEach(function(el){el.addEventListener('click',function(){show(Number(el.getAttribute('data-go')));});});
document.querySelectorAll('[data-next]').forEach(function(el){el.addEventListener('click',function(){show(current+1);});});
document.querySelectorAll('[data-prev]').forEach(function(el){el.addEventListener('click',function(){show(current-1);});});
var restart=document.getElementById('restart');if(restart)restart.addEventListener('click',function(){store={viewed:[],done:false};save();document.querySelectorAll('input[type=radio]').forEach(function(x){x.checked=false;});document.querySelectorAll('.lab-result').forEach(function(x){x.style.display='none';});document.querySelectorAll('.quiz-explain').forEach(function(x){x.classList.remove('show');});document.querySelectorAll('.celebrate').forEach(function(x){x.classList.remove('show');});show(0);});
/* copy */
function copyText(t,btn){function done(){var o=btn.textContent;btn.textContent='Copied ✓';setTimeout(function(){btn.textContent=o;},1300);}if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done).catch(function(){fallback();});}else fallback();function fallback(){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');done();}catch(e){}a.remove();}}
document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){copyText(b.getAttribute('data-copy'),b);});});
/* reveal */
document.querySelectorAll('[data-reveal]').forEach(function(b){b.addEventListener('click',function(){var t=document.getElementById(b.getAttribute('data-reveal'));if(t)t.classList.toggle('show');});});
/* updater widget: number in, visual value out */
document.querySelectorAll('[data-updater]').forEach(function(box){
  var input=box.querySelector('[data-u-in]'),btn=box.querySelector('[data-u-go]'),val=box.querySelector('[data-u-val]'),mean=box.querySelector('[data-u-mean]'),fb=box.querySelector('[data-u-fb]');
  var min=Number(box.getAttribute('data-min')||0),max=Number(box.getAttribute('data-max')||120),unit=box.getAttribute('data-unit')||'';
  btn.addEventListener('click',function(){
    var raw=input.value,v=Number(raw);
    if(raw===''||!Number.isInteger(v)||v<min||v>max){fb.className='feedback show bad';fb.textContent='Enter a whole number from '+min+' to '+max+'.';return;}
    val.textContent=v+unit;
    if(mean)mean.textContent=box.getAttribute('data-mean-tpl').split('{v}').join(v);
    if(val.animate)val.animate([{transform:'scale(.85)',opacity:.4},{transform:'scale(1)',opacity:1}],{duration:260});
    fb.className='feedback show good';fb.textContent=box.getAttribute('data-ok-tpl').split('{v}').join(v);
  });
});
/* matcher widget: pick value + type, check */
document.querySelectorAll('[data-matcher]').forEach(function(box){
  var vsel=box.querySelector('[data-m-val]'),tsel=box.querySelector('[data-m-type]'),btn=box.querySelector('[data-m-go]'),fb=box.querySelector('[data-m-fb]');
  var map={};try{map=JSON.parse(box.getAttribute('data-map')||'{}');}catch(e){}
  btn.addEventListener('click',function(){
    var v=vsel.value,c=tsel.value;
    if(!c){fb.className='feedback show bad';fb.textContent='Choose a data type first, then check.';return;}
    var ok=c===map[v];
    fb.className='feedback show '+(ok?'good':'bad');
    fb.textContent=ok?('Correct! '+c+' is a good fit here.'):('Not quite — a good fit here is '+map[v]+'. Check the cards above and try again.');
  });
});
/* builder widget: live declaration builder with validation */
var RESERVED=['class','public','static','void','int','double','boolean','char','long','short','byte','float','if','else','for','while','return','new','true','false','null','switch','case','break','continue','do','this','import','package'];
document.querySelectorAll('[data-builder]').forEach(function(box){
  var ts=box.querySelector('[data-b-type]'),ns=box.querySelector('[data-b-name]'),vs=box.querySelector('[data-b-val]'),code=box.querySelector('[data-b-code]'),fb=box.querySelector('[data-b-fb]');
  function upd(){
    var type=ts.value,name=(ns.value||'').trim()||'myVariable',raw=vs.value,value=raw,okV=true;
    var okN=/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)&&RESERVED.indexOf(name)<0;
    if(type==='String'){value='"'+raw.replace(/\\/g,'\\\\').replace(/"/g,'\\"')+'"';}
    else if(type==='char'){if(raw.length!==1)okV=false;value="'"+raw.replace(/'/g,"\\'")+"'";}
    else if(type==='boolean'){okV=(raw==='true'||raw==='false');value=raw;}
    else if(type==='float'){okV=/^-?(\d+\.?\d*|\.\d+)$/.test(raw);if(okV)value=(raw.indexOf('.')>=0?raw:raw+'.0')+'f';}
    else if(type==='double'){okV=/^-?(\d+\.?\d*|\.\d+)$/.test(raw);if(okV&&raw.indexOf('.')<0)value=raw+'.0';}
    else{okV=/^-?\d+$/.test(raw);if(okV){var n=Number(raw);if(type==='byte')okV=n>=-128&&n<=127;if(type==='short')okV=n>=-32768&&n<=32767;if(type==='int')okV=n>=-2147483648&&n<=2147483647;}}
    code.textContent=type+' '+name+' = '+value+';';
    if(!okN){fb.className='feedback show bad';fb.textContent='Check the name: start with a letter, _ or $, no spaces, and avoid reserved words like class or int.';}
    else if(!okV){fb.className='feedback show bad';fb.textContent='That value does not fit '+type+'. '+(type==='char'?'A char needs exactly one character.':type==='boolean'?'Use true or false.':type==='byte'?'Byte needs −128 to 127.':type==='short'?'Short needs −32768 to 32767.':type==='int'?'Int needs −2147483648 to 2147483647.':'Enter a valid number for this type.');}
    else{fb.className='feedback show good';fb.textContent='Looks good! Type, name, equals, value, semicolon — the five pieces fit together.';}
  }
  [ts,ns,vs].forEach(function(el){el.addEventListener('input',upd);});upd();
  var cp=box.querySelector('[data-b-copy]');if(cp)cp.addEventListener('click',function(){copyText(code.textContent,cp);});
});
/* lab run-reveal */
document.querySelectorAll('[data-lab]').forEach(function(box){
  var btn=box.querySelector('[data-lab-go]'),res=box.querySelector('[data-lab-res]');
  btn.addEventListener('click',function(){res.style.display='block';if(res.animate)res.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:300});btn.textContent='✓ Program ran';btn.disabled=true;});
});
/* spot-the-mistake radios */
document.querySelectorAll('[data-mistake]').forEach(function(box){
  var btn=box.querySelector('[data-m-go]'),fb=box.querySelector('[data-m-fb]'),name=box.getAttribute('data-m-name'),good=box.getAttribute('data-m-good');
  btn.addEventListener('click',function(){
    var p=box.querySelector('input[name="'+name+'"]:checked');
    if(!p){fb.className='feedback show bad';fb.textContent='Choose an answer first.';return;}
    var ok=p.value===good;
    fb.className='feedback show '+(ok?'good':'bad');
    fb.textContent=ok?box.getAttribute('data-m-ok'):box.getAttribute('data-m-no');
  });
});
/* scored quiz: .quiz-q[data-answer="b"] + .quiz-explain inside */
document.querySelectorAll('[data-quiz]').forEach(function(card){
  var btn=card.querySelector('[data-q-go]'),fb=card.querySelector('[data-q-fb]'),cel=card.querySelector('[data-q-cel]');
  var qs=Array.prototype.slice.call(card.querySelectorAll('.quiz-q'));
  btn.addEventListener('click',function(){
    var score=0,missing=0;
    qs.forEach(function(q,i){
      var name=q.getAttribute('data-qname'),ans=q.getAttribute('data-answer'),ex=q.querySelector('.quiz-explain');
      var sel=q.querySelector('input[name="'+name+'"]:checked');
      if(!sel){missing++;if(ex)ex.classList.remove('show');return;}
      var ok=sel.value===ans;if(ok)score++;
      recordQuiz(topicId,name+(i+1),ok);
      if(ex){ex.classList.add('show');ex.innerHTML=(ok?'<b>Correct.</b> ':'<b>Not quite.</b> ')+ex.getAttribute('data-text');}
    });
    if(missing){fb.className='feedback show bad';fb.textContent='Answer all '+qs.length+' questions first — '+missing+' left.';return;}
    var pass=score>=Math.ceil(qs.length*0.8);
    fb.className='feedback show '+(pass?'good':'bad');
    fb.textContent='You scored '+score+' out of '+qs.length+'. '+(score===qs.length?'Perfect score!':pass?'Very good — review the one you missed, then try again.':'Review the steps above and try again. Practice, not magic.');
    if(cel)cel.classList.toggle('show',pass);
    if(pass){markGlobal(topicId);}
  });
});
paint();
})();
