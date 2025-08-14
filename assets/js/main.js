document.getElementById('year').textContent = new Date().getFullYear();
AOS.init({ once:true, duration: 700, offset: 80 });
VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 8, speed: 350, glare: true, 'max-glare': 0.12 });
new Typed('#typed', {
  strings: ['Cloud Analyst','AWS Solutions Architect','Cloud Security Analyst'],
  typeSpeed: 46, backSpeed: 26, backDelay: 1100, loop: true
});
