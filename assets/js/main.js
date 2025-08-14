const htmlEl=document.documentElement;const toggleBtn=document.getElementById('themeToggle');
function setTheme(t){htmlEl.setAttribute('data-theme',t);localStorage.setItem('theme',t);toggleBtn.textContent=t==='dark'?'🌙 Dark':'🌞 Light'}
setTheme(localStorage.getItem('theme')||'light');toggleBtn.addEventListener('click',()=>setTheme(htmlEl.getAttribute('data-theme')==='light'?'dark':'light'));
AOS.init({once:false,duration:700,easing:'ease-out-cubic'});
tsParticles.load('tsparticles',{background:{color:{value:'transparent'}},fullScreen:{enable:false},fpsLimit:60,particles:{number:{value:60},color:{value:['#5eead4','#60a5fa','#94a3b8']},move:{enable:true,speed:1.2,outModes:{default:'bounce'}},size:{value:{min:1,max:3}},opacity:{value:0.4},links:{enable:true,distance:120,color:'#5eead4',opacity:.25,width:1}},detectRetina:true});
new Typed('#typed-roles',{strings:['Cloud Analyst','Technical Specialist','Cloud Security Analyst'],typeSpeed:50,backSpeed:25,backDelay:1400,loop:true});
new Typed('#typed-certs',{strings:['AWS Solutions Architect Associate','ISC2 Certified in Cybersecurity','Google IT Support Professional','AI Essentials Certificate'],typeSpeed:40,backSpeed:22,backDelay:1300,loop:true});
const bars=document.querySelectorAll('#skills .progress-bar');const obs=new IntersectionObserver(es=>{es.forEach(e=>{const el=e.target,v=el.getAttribute('data-value');if(e.isIntersecting){el.style.width=v+'%'}else{el.style.width='0%'}})},{threshold:.35});bars.forEach(b=>obs.observe(b));
