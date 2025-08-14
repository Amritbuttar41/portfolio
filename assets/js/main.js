document.getElementById('year').textContent = new Date().getFullYear();
AOS.init({ once:false, duration: 700, offset: 80 });
VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 8, speed: 350, glare: true, 'max-glare': 0.12 });
new Typed('#typed', {
  strings: ['Cloud Analyst','AWS Solutions Architect','Cloud Security Analyst'],
  typeSpeed: 46, backSpeed: 26, backDelay: 1100, loop: true
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('#skills .progress-bar');
function animateBars() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && bar.style.width === '0%') {
      bar.style.width = '100%';
    }
  });
}
window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);
