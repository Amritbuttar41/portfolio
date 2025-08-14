document.getElementById('year').textContent = new Date().getFullYear();

// Typed hero titles (faster cycle)
new Typed('#typed', {
  strings: ['Cloud Analyst','AWS Solutions Architect','Cloud Security Analyst'],
  typeSpeed: 48, backSpeed: 30, backDelay: 900, loop: true
});

// AOS repeatable animations
AOS.init({ once:false, duration: 650, offset: 80 });

// Skill bars animation both scroll down and scroll up
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
const speedMs = 1000; // ~1s fill
bars.forEach(b => {
  b.style.transition = `width ${speedMs}ms ease`;
  const cls = Array.from(b.classList).find(c => skillPercents[c] !== undefined);
  if (cls) {
    b.dataset.targetWidth = skillPercents[cls] + '%';
  }
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const bar = entry.target;
    if(entry.isIntersecting){
      // animate to target width
      requestAnimationFrame(()=>{ bar.style.width = bar.dataset.targetWidth; });
    }else{
      // reset when out of view to allow reanimation when scrolling back
      bar.style.width = '0%';
    }
  });
},{ threshold: 0.4 });

bars.forEach(b => observer.observe(b));
