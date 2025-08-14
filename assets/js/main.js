document.getElementById('year').textContent = new Date().getFullYear();

// Typed hero titles (faster cycle)
new Typed('#typed', {
  strings: ['Cloud Analyst','AWS Solutions Architect','Cloud Security Analyst'],
  typeSpeed: 48, backSpeed: 30, backDelay: 900, loop: true
});

// AOS repeatable animations
AOS.init({ once:false, duration: 650, offset: 80 });

// IntersectionObserver for skill bars
const bars = document.querySelectorAll('#skills .progress-bar');
const speedMs = 1000; // ~1s fill
bars.forEach(b => { b.style.transition = `width ${speedMs}ms ease`; });

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const bar = entry.target;
    const target = bar.getAttribute('data-percent') || '100';
    if(entry.isIntersecting){
      // animate to target value
      requestAnimationFrame(()=>{ bar.style.width = target + '%'; });
    }else{
      // reset when out of view
      bar.style.width = '0%';
    }
  });
},{ threshold: 0.4 });

bars.forEach(b => observer.observe(b));
