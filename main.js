/* ============================================
   MULTIVERSE STUDIOS — Starfield & Interactions
   ============================================ */

/* --- Analytics chokepoint accessor ---
 * The real chokepoint is window.MVS.track, installed by umami-link-fix.js.
 * That file is `defer` and this one is not, so it has not run yet at parse
 * time; anything we emit before it installs goes into window.__mvsQueue, which
 * it drains on install. One path, one buffer — never call window.umami directly.
 */
function mvsTrack(name, props) {
  try {
    if (window.MVS && typeof window.MVS.track === 'function') {
      window.MVS.track(name, props || {});
      return;
    }
    var q = (window.__mvsQueue = window.__mvsQueue || []);
    if (q.length < 100) q.push([name, props || {}]);
  } catch (err) {
    /* analytics must never break the page */
  }
}

/* --- Client error visibility ---
 * Registered FIRST so it can catch failures in everything below. 102 sessions a
 * month arrive from Instagram/Facebook in-app webviews; today a page that
 * white-screens there and a page that is read and rejected are the same data.
 *
 * Hard cap of 3 per session with de-duplication on message_key, so a script
 * failing inside a render loop can never become a firehose.
 */
(function initErrorTracking() {
  var MAX_ERRORS = 3;
  var sent = 0;
  var seen = {};

  function normalize(msg) {
    return String(msg || 'unknown')
      .replace(/https?:\/\/[^\s)]+/g, '<url>')   // never ship a full URL w/ query
      .replace(/\d{4,}/g, 'N')                   // collapse ids/timestamps/line numbers,
                                                 // but KEEP 3-digit HTTP statuses readable
      .slice(0, 60);
  }

  function sourceOf(filename) {
    if (!filename) return 'inline';
    try { return new URL(filename, window.location.href).pathname; }
    catch (err) { return 'unknown'; }
  }

  function report(message, filename) {
    var key = normalize(message);
    if (seen[key] || sent >= MAX_ERRORS) return;
    seen[key] = true;
    sent++;
    mvsTrack('error_occurred', {
      source: sourceOf(filename),
      message_key: key,
      page: window.location.pathname,
    });
  }

  window.addEventListener('error', function (e) {
    // Resource load failures (img/script/link) surface as capture-phase events
    // with no e.message; report them by tag so a missing asset is visible too.
    if (e.target && e.target !== window && e.target.tagName) {
      report('resource_failed ' + e.target.tagName.toLowerCase(),
             e.target.src || e.target.href);
      return;
    }
    report(e.message, e.filename);
  }, true);

  window.addEventListener('unhandledrejection', function (e) {
    var reason = e.reason;
    report((reason && (reason.message || reason)) || 'unhandled_rejection', '');
  });

  // Exposed so non-throwing failures (a fetch that resolves non-ok, which never
  // reaches onerror or unhandledrejection) can report through the same cap.
  window.MVS = window.MVS || {};
  window.MVS.reportError = report;
})();

/* --- Section reach ---
 * The home page is ~19,400px tall — 23 mobile screens. 42% of everyone who
 * lands on it emits exactly one event in their entire life, so we cannot tell
 * "left above the fold" from "scrolled the whole catalogue and declined all
 * nine games". This answers that.
 *
 * NOT scroll depth: 25% depth on this page is already past every hero CTA, so a
 * percentage would be unreadable. Named sections, fixed enumeration, at most
 * once each per page per session — a section that has fired is unobserved, so
 * it can never fire twice and this is not scroll-driven.
 */
(function initSectionTracking() {
  if (!window.IntersectionObserver) return;

  var ALLOWED = {
    hero: 1, games_grid: 1, game_card: 1,
    support_banner: 1, screenshots: 1, footer_cta: 1,
  };

  var fired = {};
  var page = window.location.pathname;

  /* TWO observers, because one cannot express "the reader got here".
   *
   * A plain `threshold: 0.5` can NEVER fire for an element taller than the
   * viewport: its intersectionRatio caps at viewportHeight/elementHeight. The
   * games grid is ~6,000px on an 844px phone (ratio caps at ~0.14), so the
   * single most important section on the page would have been permanently
   * silent — and IntersectionObserver only calls back on threshold crossings,
   * so no amount of ratio arithmetic inside the callback rescues it.
   *
   *   halfObserver   — threshold 0.5. Catches sections shorter than the
   *                    viewport, including the hero at scroll 0.
   *   centerObserver — rootMargin collapses the root to the viewport's centre
   *                    line, so it fires the moment any element crosses the
   *                    middle of the screen, at any height.
   *
   * Whichever fires first wins; `fired` dedupes and both unobserve. Crossing
   * based, never scroll-driven, at most once per section per page per session.
   */
  var halfObserver, centerObserver;

  function onVisible(entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var section = el.getAttribute('data-section');
      halfObserver.unobserve(el);
      centerObserver.unobserve(el);
      if (!ALLOWED[section]) return;

      var game = el.getAttribute('data-section-game') || '';
      var key = section + '|' + game;
      if (fired[key]) return;
      fired[key] = true;

      var props = { section: section, page: page };
      if (game) props.game = game;
      mvsTrack('section_viewed', props);
    });
  }

  halfObserver = new IntersectionObserver(onVisible, { threshold: 0.5 });
  centerObserver = new IntersectionObserver(onVisible, {
    threshold: 0,
    rootMargin: '-50% 0px -50% 0px',
  });

  function observeAll() {
    document.querySelectorAll('[data-section]').forEach(function (el) {
      if (!ALLOWED[el.getAttribute('data-section')]) return;
      halfObserver.observe(el);
      centerObserver.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }
})();

/* --- Dwell milestones ---
 * Splits the one-event sessions into "gone before the page was read" and "read
 * and declined". Canonical `session_milestone` {seconds}; this property has
 * simply never emitted it. Maximum 3 per session by construction; timers are
 * cleared on pagehide and never re-armed, so a backgrounded tab left open
 * overnight emits nothing past the 60s mark.
 */
(function initDwellTracking() {
  var MILESTONES = [10, 30, 60];
  var page = window.location.pathname;
  var timers = MILESTONES.map(function (seconds) {
    return setTimeout(function () {
      mvsTrack('session_milestone', { seconds: seconds, page: page });
    }, seconds * 1000);
  });

  window.addEventListener('pagehide', function () {
    timers.forEach(clearTimeout);
    timers.length = 0;
  });
})();

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
    .then(function (res) {
      if (!res.ok) {
        // A fetch that resolves non-ok never reaches window.onerror or
        // unhandledrejection, and the .catch() below swallows it — so this 404
        // (live on every single landing pageview) was invisible. Report it
        // explicitly, through the same per-session cap.
        if (window.MVS && window.MVS.reportError) {
          window.MVS.reportError('versions_fetch_http_' + res.status, '/versions.json');
        }
        return null;
      }
      return res.json();
    })
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
    .catch(function (err) {
      if (window.MVS && window.MVS.reportError) {
        window.MVS.reportError('versions_fetch_failed ' + (err && err.message), '/versions.json');
      }
      /* keep hardcoded fallback */
    });
})();
