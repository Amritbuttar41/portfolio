document.getElementById('year').textContent = new Date().getFullYear();

// Typed hero titles (faster cycle)
new Typed('#typed', {
  strings: ['Cloud Analyst','AWS Solutions Architect','Cloud Security Analyst'],
  typeSpeed: 48, backSpeed: 30, backDelay: 900, loop: true
});

// AOS repeatable animations
AOS.init({ once:false, duration: 650, offset: 80 });



// ==== THEME TOGGLE ====
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
function setIcon(theme){ themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon'; }
setIcon(savedTheme);
themeToggle?.addEventListener('click', ()=>{
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  setIcon(next);
});

// ==== FLASHY SCROLL-UP EFFECTS ====
// Detect scroll direction
let lastY = window.scrollY;
let direction = 'down';
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  direction = y < lastY ? 'up' : 'down';
  lastY = y;
}, {passive:true});

// Apply flashy effect to elements with data-aos when entering view while scrolling up
const animTargets = document.querySelectorAll('[data-aos]');
const upObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && direction === 'up'){
      entry.target.classList.remove('flashy-up'); // reset if present
      // force reflow to restart animation
      void entry.target.offsetWidth;
      entry.target.classList.add('flashy-up');
      // remove after animation ends to allow re-run next time
      setTimeout(()=> entry.target.classList.remove('flashy-up'), 900);
    }
  });
},{threshold:0.25});
animTargets.forEach(el => upObserver.observe(el));


// ==== Skill bars with unified gradient and realistic values ====
const skillPercents = {
  'bar-aws': 95,
  'bar-gcp': 80,
  'bar-linux': 88,
  'bar-python': 78,
  'bar-networking': 82,
  'bar-security': 90,
  'bar-architecture': 85,
  'bar-automation': 75
};

const bars = document.querySelectorAll('#skills .progress-bar');
bars.forEach(b => {
  b.style.transition = `width 1000ms ease`;
  const cls = Array.from(b.classList).find(c => skillPercents[c] !== undefined);
  if (cls) b.dataset.targetWidth = skillPercents[cls] + '%';
});

const barObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      requestAnimationFrame(()=>{ entry.target.style.width = entry.target.dataset.targetWidth; });
    }else{
      entry.target.style.width = '0%';
    }
  });
},{ threshold: 0.4 });

bars.forEach(b => barObserver.observe(b));

// ==== Theme Toggle Fix ====
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
function setIcon(theme){ themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon'; }
setIcon(savedTheme);
themeToggle?.addEventListener('click', ()=>{
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  setIcon(next);
});

// ==== Scroll-up-from-top flashy effects ====
let lastY = window.scrollY;
let direction = 'down';
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  direction = y < lastY ? 'up' : 'down';
  lastY = y;
},{passive:true});

const flashyObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && direction === 'up'){
      entry.target.classList.remove('flashy-up'); // reset
      void entry.target.offsetWidth;
      entry.target.classList.add('flashy-up');
      setTimeout(()=> entry.target.classList.remove('flashy-up'), 900);
    }
  });
},{threshold:0.25});

document.querySelectorAll('section').forEach(sec => flashyObserver.observe(sec));


// === Ensure theme attribute is set on <html> ===
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);
  const icon = document.getElementById('themeIcon');
  if(icon){ icon.className = saved === 'dark' ? 'bi bi-sun' : 'bi bi-moon'; }
})();

// === Scroll-up-from-top flashy animation ===
let lastPos = window.scrollY;
let dir = 'down';
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  dir = y < lastPos ? 'up' : 'down';
  lastPos = y;
}, {passive:true});

const topObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && dir === 'up'){
      entry.target.classList.remove('flashy-top');
      void entry.target.offsetWidth; // reflow to restart
      entry.target.classList.add('flashy-top');
      setTimeout(()=> entry.target.classList.remove('flashy-top'), 900);
    }
  });
},{threshold: 0.35});

document.querySelectorAll('section, header, .project, .cert-carousel').forEach(el=> topObserver.observe(el));
