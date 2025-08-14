 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/assets/js/main.js b/assets/js/main.js
index cd704d639286ee9d757af02d83a1687ef4e8ae4f..15ed777636385d7970f1a87b9ee2b4843786a0df 100644
--- a/assets/js/main.js
+++ b/assets/js/main.js
@@ -1,46 +1,50 @@
 // Theme toggle
 const bodyEl = document.documentElement;
 const toggleBtn = document.getElementById('themeToggle');
 
 function setTheme(theme){
+  bodyEl.classList.add('theme-transition');
   bodyEl.setAttribute('data-theme', theme);
   localStorage.setItem('theme', theme);
-  toggleBtn.textContent = theme === 'dark' ? '🌙 Dark' : '🌞 Light';
+  toggleBtn.innerHTML = theme === 'dark' ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
+  toggleBtn.classList.toggle('btn-outline-light', theme === 'dark');
+  toggleBtn.classList.toggle('btn-outline-primary', theme === 'light');
+  setTimeout(()=> bodyEl.classList.remove('theme-transition'), 300);
 }
+
 const savedTheme = localStorage.getItem('theme') || 'light';
 setTheme(savedTheme);
 toggleBtn.addEventListener('click', ()=> setTheme(bodyEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));
 
 // AOS init (animate on scroll down & up)
-AOS.init({ once: false, duration: 700, easing: 'ease-out-cubic' });
+AOS.init({ once: false, duration: 700, easing: 'ease-out-cubic', mirror: true });
 
 // Typed certifications
 new Typed('#cert-typed', {
   strings: [
     'AWS Solutions Architect Associate',
     'Google IT Support Professional',
     'ISC2 Certified in Cybersecurity',
-    'Google AI Essentials',
-    'Skills for Hire: Cybersecurity'
+    'Google AI Essentials'
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
 
EOF
)
