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
  document.documentElement.classList.add('js-animations');
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

// --- Live Version Badges ---
// Read current game versions from same-origin /versions.json (baked at deploy
// time by the CI step that curls each game's build-info server-side) and patch
// the data-label attributes. Same-origin avoids the CORS wall that blocked the
// old cross-origin fetches to play.multiversestudios.xyz. If versions.json is
// missing or a game is absent, the hardcoded data-label is kept as fallback.
(function initVersionBadges() {
  const VERSION_RE = /v\d+\.\d+\.\d+/;

  fetch('/versions.json', { cache: 'no-cache' })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (versions) {
      if (!versions) return;
      Object.keys(versions).forEach(function (slug) {
        const version = versions[slug];
        if (!version || version === 'unknown') return;
        const ver = 'v' + String(version).replace(/^v/, '');
        // Match both data-umami-event and data-umami-skip: umami-link-fix.js
        // renames data-umami-event -> data-umami-skip on navigational links so
        // umami can't break navigation, so we must select either form here.
        document.querySelectorAll('[data-umami-event*="' + slug + '"], [data-umami-skip*="' + slug + '"]').forEach(function (el) {
          const label = el.getAttribute('data-label');
          if (!label) return;
          if (VERSION_RE.test(label)) {
            el.setAttribute('data-label', label.replace(VERSION_RE, ver));
          } else {
            el.setAttribute('data-label', label + ' ' + ver);
          }
        });
      });
    })
    .catch(function () { /* keep hardcoded fallback */ });
})();
