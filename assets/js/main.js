document.getElementById('year').textContent=new Date().getFullYear();
try{new Typed('#typed',{strings:['Cloud Security Analyst','AWS Solutions Architect'],typeSpeed:42,backSpeed:28,backDelay:1000,loop:true});}catch(e){}
AOS.init({once:false,duration:650,offset:80});
(function(){const root=document.documentElement;const t=document.getElementById('themeToggle');const i=document.getElementById('themeIcon');const saved=localStorage.getItem('theme')||'light';root.setAttribute('data-theme',saved);if(i)i.className=saved==='dark'?'bi bi-sun':'bi bi-moon';t&&t.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);localStorage.setItem('theme',next);if(i)i.className=next==='dark'?'bi bi-sun':'bi bi-moon';});})();
const bars=document.querySelectorAll('#skills .progress-bar.bar');bars.forEach(b=>b.style.transition='width 1000ms ease');const map=new Map();bars.forEach(b=>map.set(b,b.getAttribute('data-target')+'%'));
const obs=new IntersectionObserver((ents)=>{ents.forEach(e=>{const el=e.target;if(e.isIntersecting){requestAnimationFrame(()=>{el.style.width=map.get(el)||'100%';});}else{el.style.width='0%';}});},{threshold:0.4});bars.forEach(b=>obs.observe(b));
let lastY=window.scrollY,dir='down';addEventListener('scroll',()=>{const y=window.scrollY;dir=y<lastY?'up':'down';lastY=y;},{passive:true});
const topObs=new IntersectionObserver((ents)=>{ents.forEach(e=>{if(e.isIntersecting&&dir==='up'){e.target.classList.remove('flashy-top');void e.target.offsetWidth;e.target.classList.add('flashy-top');setTimeout(()=>e.target.classList.remove('flashy-top'),900);}});},{threshold:0.35});
document.querySelectorAll('header.hero, section').forEach(el=>topObs.observe(el));
