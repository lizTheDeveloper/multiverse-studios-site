/* ============================================
   MULTIVERSE STUDIOS — Starfield & Interactions
   ============================================ */

// --- Starfield ---
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.1,
        drift: (Math.random() - 0.5) * 0.08,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.01 + 0.003,
      });
    }
  }

  let time = 0;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    time++;
    for (const s of stars) {
      const twinkle = Math.sin(time * s.twinkleSpeed + s.phase) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232, 230, 240, ${s.a * twinkle})`;
      ctx.fill();
      s.y += s.drift;
      if (s.y < -2) s.y = h + 2;
      if (s.y > h + 2) s.y = -2;
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    createStars(Math.min(200, Math.floor(w * h / 6000)));
  });

  resize();
  createStars(Math.min(200, Math.floor(w * h / 6000)));
  draw();
})();

// --- Scroll Reveal ---
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// --- Mobile Nav ---
(function initNav() {
  const btn = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    btn.setAttribute('aria-expanded', links.classList.contains('open'));
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();
