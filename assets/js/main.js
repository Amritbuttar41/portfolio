// Theme toggle
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved){ root.setAttribute('data-theme', saved); }
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const isDark = root.getAttribute('data-theme') !== 'light';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// AOS
AOS.init({ once:true, offset: 80, duration: 700 });

// Tilt
VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 10, speed: 400, glare: true, 'max-glare': 0.2 });

// Typed.js
new Typed('#typed', {
  strings: ['Cloud Analyst','AWS Solutions Architect','Cloud Architecture'],
  typeSpeed: 45,
  backSpeed: 28,
  backDelay: 1200,
  loop: true
});

// tsParticles
tsParticles.load('tsparticles', {
  background: { color: 'transparent' },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, area: 800 } },
    color: { value: ['#7c3aed','#22d3ee','#60a5fa'] },
    links: { enable: true, color: '#64748b', distance: 120, opacity: 0.3, width: 1 },
    move: { enable: true, speed: 1.2, direction: 'none', outModes: 'out' },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: 'grab' }, resize: true },
    modes: { grab: { distance: 140, links: { opacity: 0.6 } } }
  },
  detectRetina: true
});
