// Theme toggle
const bodyEl = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

function setTheme(theme){
  bodyEl.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '🌙 Dark' : '🌞 Light';
}
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
toggleBtn.addEventListener('click', ()=> setTheme(bodyEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));

// AOS init (animate on scroll down & up)
AOS.init({ once: false, duration: 700, easing: 'ease-out-cubic' });

// Typed certifications
new Typed('#cert-typed', {
  strings: [
    'AWS Solutions Architect Associate',
    'Google IT Support Professional',
    'ISC2 Certified in Cybersecurity',
    'Google AI Essentials',
    'Skills for Hire: Cybersecurity'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1500,
  loop: true
});

// Animate skills bars when in view + reset when out of view
const bars = document.querySelectorAll('#skills .progress-bar');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const bar = entry.target;
    const val = bar.getAttribute('data-value');
    if(entry.isIntersecting){
      requestAnimationFrame(()=> bar.style.width = val + '%');
    } else {
      bar.style.width = '0%';
    }
  });
}, { threshold: 0.35 });

bars.forEach(b=> observer.observe(b));
