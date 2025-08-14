// Init AOS
AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });

// Stats count-up animation
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const isPercent = el.textContent.includes('%');
  const suffix = el.textContent.replace(/^[0-9\.]+/, '');
  let current = 0;
  const step = target / 60;
  const tick = () => {
    current += step;
    if (current >= target) { current = target; }
    el.textContent = (isPercent ? current.toFixed(1) : Math.round(current)) + (isPercent ? '%' : suffix);
    if (current < target) requestAnimationFrame(tick);
  };
  tick();
}
document.querySelectorAll('.stat-num').forEach((el)=>{
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ animateCount(el); observer.unobserve(el);} });
  }, {threshold:.6});
  observer.observe(el);
});

// Vanilla tilt for project cards
if (window.VanillaTilt) {
  document.querySelectorAll('.tilt').forEach(el => {
    VanillaTilt.init(el, { max: 8, speed: 400, glare: true, 'max-glare': .15 });
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with localStorage
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved){ document.documentElement.setAttribute('data-theme', saved); document.body.dataset.bsTheme = saved === 'dark' ? 'dark':'light'; }
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', current);
  document.body.dataset.bsTheme = current === 'dark' ? 'dark' : 'light';
  localStorage.setItem('theme', current);
});
