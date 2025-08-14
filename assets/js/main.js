// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
// Typewriter
try{new Typed('#typed',{strings:['Cloud Security Analyst','AWS Solutions Architect'],typeSpeed:42,backSpeed:28,backDelay:1000,loop:true});}catch(e){}
// AOS
AOS.init({ once:false, duration:650, offset:80 });
// Theme toggle
(function(){
  const root=document.documentElement, btn=document.getElementById('themeToggle'), icon=document.getElementById('themeIcon');
  const saved=localStorage.getItem('theme')||'light';
  root.setAttribute('data-theme',saved);
  if(icon) icon.className=saved==='dark'?'bi bi-sun':'bi bi-moon';
  btn&&btn.addEventListener('click',()=>{
    const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    localStorage.setItem('theme',next);
    if(icon) icon.className=next==='dark'?'bi bi-sun':'bi bi-moon';
  });
})();
// Skills bars animate on enter, reset on exit
(function(){
  const bars=document.querySelectorAll('#skills .progress-bar.bar');
  const targets=new Map(); bars.forEach(b=>targets.set(b,(b.getAttribute('data-target')||'100')+'%'));
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      const el=e.target;
      if(e.isIntersecting){ requestAnimationFrame(()=>{ el.style.width=targets.get(el); }); }
      else{ el.style.width='0%'; }
    });
  },{threshold:0.4});
  bars.forEach(b=>{ b.style.width='0%'; b.style.transition='width 1000ms ease'; obs.observe(b); });
})();
// Flashy effect when scrolling UP
(function(){
  let lastY=window.scrollY, dir='down';
  addEventListener('scroll',()=>{const y=window.scrollY; dir=y<lastY?'up':'down'; lastY=y;},{passive:true});
  const topObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting && dir==='up'){
        e.target.classList.remove('flashy-top'); void e.target.offsetWidth;
        e.target.classList.add('flashy-top');
        setTimeout(()=>e.target.classList.remove('flashy-top'),900);
      }
    });
  },{threshold:0.35});
  document.querySelectorAll('header.hero, section').forEach(el=>topObs.observe(el));
})();