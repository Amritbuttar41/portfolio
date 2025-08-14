// Theme toggle
const htmlEl=document.documentElement, btn=document.getElementById('themeToggle');
function setTheme(t){htmlEl.setAttribute('data-theme',t);localStorage.setItem('theme',t);btn.textContent=t==='dark'?'🌙 Dark':'🌞 Light'}
setTheme(localStorage.getItem('theme')||'light'); btn.addEventListener('click',()=>setTheme(htmlEl.getAttribute('data-theme')==='light'?'dark':'light'));

// AOS (both directions)
AOS.init({ once:false, duration:700, easing:'ease-out-cubic' });

// Particles
tsParticles.load('tsparticles',{
  fullScreen:{ enable:false }, background:{ color:{ value:'transparent' }}, fpsLimit:60,
  particles:{
    number:{ value:70 },
    color:{ value:['#54ffd5','#5ab4ff','#a78bfa'] },
    links:{ enable:true, distance:120, color:'#54ffd5', opacity:.25, width:1 },
    move:{ enable:true, speed:1.2, outModes:{ default:'bounce'} },
    opacity:{ value:0.45 },
    size:{ value:{ min:1, max:3 } }
  }
});

// Typed effects
new Typed('#typed-roles',{ strings:['Cloud Analyst','Technical Specialist','Cloud Security Analyst'], typeSpeed:50, backSpeed:25, backDelay:1400, loop:true });
new Typed('#typed-certs',{ strings:['AWS Solutions Architect Associate','ISC2 Certified in Cybersecurity','Google IT Support Professional','AI Essentials Certificate'], typeSpeed:40, backSpeed:22, backDelay:1300, loop:true });

// Skills bars animate on enter & reset on exit
const bars=document.querySelectorAll('#skills .progress-bar');
const obs=new IntersectionObserver(es=>{ es.forEach(e=>{ const el=e.target, v=el.getAttribute('data-value'); if(e.isIntersecting){ el.style.width=v+'%'; } else { el.style.width='0%'; } }) },{ threshold:.35 });
bars.forEach(b=>obs.observe(b));

// Tilt on project cards
VanillaTilt.init(document.querySelectorAll('.tilt'), { max:8, speed:400, glare:true, 'max-glare':0.15 });
