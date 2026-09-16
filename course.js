'use strict';
(() => {
  const key='ce-deploy-partner-field-guide-v1';
  const checks=[...document.querySelectorAll('[data-complete]')];
  const toast=document.getElementById('toast');
  let timer;
  function notify(message){clearTimeout(timer);toast.textContent=message;timer=setTimeout(()=>{toast.textContent='';},4500);}
  let saved=[];
  try{const parsed=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(parsed))saved=parsed.filter(x=>typeof x==='string');}catch{/* Course remains usable without storage. */}
  checks.forEach(input=>{input.checked=saved.includes(input.dataset.complete);});
  function update(persist){
    const completed=checks.filter(input=>input.checked).map(input=>input.dataset.complete);
    document.getElementById('progressText').textContent=`${completed.length} of ${checks.length} complete`;
    document.getElementById('progressPercent').textContent=`${Math.round(completed.length/checks.length*100)}%`;
    document.getElementById('courseProgress').value=completed.length;
    document.getElementById('completion').hidden=completed.length!==checks.length;
    if(persist)try{localStorage.setItem(key,JSON.stringify(completed));}catch{notify('Progress could not be saved in this browser. You can still follow the course.');}
  }
  checks.forEach(input=>input.addEventListener('change',()=>update(true)));
  document.getElementById('resetProgress').addEventListener('click',()=>{checks.forEach(input=>{input.checked=false;});update(true);notify('Course progress reset.');});
  async function copy(text){try{await navigator.clipboard.writeText(text);notify('Copied. Paste it into Webex when you are ready.');}catch{notify('Copy is unavailable. Select the visible text and copy it manually.');}}
  document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',()=>copy(button.dataset.copy)));
  document.getElementById('copyReport').addEventListener('click',()=>copy(document.getElementById('reportTemplate').textContent));
  document.getElementById('printGuide').addEventListener('click',()=>window.print());
  window.addEventListener('beforeprint',()=>{document.querySelectorAll('details').forEach(d=>{d.dataset.wasOpen=String(d.open);d.open=true;});});
  window.addEventListener('afterprint',()=>{document.querySelectorAll('details').forEach(d=>{d.open=d.dataset.wasOpen==='true';delete d.dataset.wasOpen;});});
  const navLinks=[...document.querySelectorAll('nav a')];
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(!visible.length)return;navLinks.forEach(a=>{if(a.hash==='#'+visible[0].target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});},{rootMargin:'-5% 0px -65% 0px',threshold:0});document.querySelectorAll('header[id],section[data-lesson]').forEach(section=>observer.observe(section));}
  update(false);
})();
