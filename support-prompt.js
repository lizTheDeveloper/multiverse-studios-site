/* ============================================
   MULTIVERSE STUDIOS — Support Prompt (Auto-trigger)
   Shows a non-intrusive bottom banner after engagement,
   then opens the PWYC modal on click.

   Usage: <script src="support-prompt.js"
            data-support-game="nel|cotb|precursors|mvee"
            data-support-delay="180"></script>

   data-support-game   — game key (required)
   data-support-delay  — seconds of active time before
                          showing (default: 180 = 3 min)
   ============================================ */

(function () {
  'use strict';

  // ── Read config from script tag ────────────────────────────
  var scriptEl = document.currentScript;
  if (!scriptEl) return;

  var gameKey = scriptEl.getAttribute('data-support-game');
  if (!gameKey) {
    console.error('support-prompt.js: missing data-support-game attribute');
    return;
  }

  var delaySec = parseInt(scriptEl.getAttribute('data-support-delay'), 10) || 180;

  // ── Storage keys (per-game) ────────────────────────────────
  var DISMISS_KEY = gameKey + '.supportPrompt.dismissedAt';
  var SESSION_KEY = gameKey + '.supportPrompt.shown';

  // ── Guard: once per session, 7-day dismissal ───────────────
  function shouldSkip() {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return true;
      var dismissed = localStorage.getItem(DISMISS_KEY);
      if (dismissed) {
        var elapsed = Date.now() - parseInt(dismissed, 10);
        if (elapsed < 7 * 24 * 60 * 60 * 1000) return true;
        localStorage.removeItem(DISMISS_KEY);
      }
    } catch (e) {
      // Private browsing — proceed anyway
    }
    return false;
  }

  if (shouldSkip()) return;

  // ── Active-time tracker (pauses when tab hidden) ───────────
  var activeMs = 0;
  var TICK_MS = 5000;
  var triggered = false;

  var timer = setInterval(function () {
    if (document.hidden) return;
    activeMs += TICK_MS;
    if (!triggered && activeMs >= delaySec * 1000) {
      triggered = true;
      clearInterval(timer);
      showBanner();
    }
  }, TICK_MS);

  // ── Game display names ─────────────────────────────────────
  var GAME_NAMES = {
    precursors: 'Precursors',
    mvee: 'MVEE',
    cotb: 'Cultures of the Belt',
    nel: 'Never Ever Land',
  };

  var GAME_ACCENTS = {
    precursors: '#ff3d7f',
    mvee: '#ff6b35',
    cotb: '#7b68ee',
    nel: '#00ffc8',
  };

  // ── Banner UI ──────────────────────────────────────────────
  function showBanner() {
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {}

    var accent = GAME_ACCENTS[gameKey] || '#00ffc8';
    var name = GAME_NAMES[gameKey] || 'this game';

    var banner = document.createElement('div');
    banner.id = 'support-prompt-banner';
    banner.setAttribute('role', 'complementary');
    banner.setAttribute('aria-label', 'Support prompt');

    banner.innerHTML = [
      '<div class="sp-inner">',
      '  <span class="sp-text">Enjoying ' + name + '? ',
      '    <strong>Support the studio</strong> — pay what you can.</span>',
      '  <button class="sp-cta" aria-label="Open support modal">Support →</button>',
      '  <button class="sp-close" aria-label="Dismiss">&times;</button>',
      '</div>',
    ].join('');

    // ── Styles (scoped to banner) ────────────────────────────
    var style = document.createElement('style');
    style.textContent = [
      '#support-prompt-banner {',
      '  position: fixed; bottom: 0; left: 0; right: 0;',
      '  z-index: 99990;',
      '  background: rgba(10, 10, 14, 0.94);',
      '  backdrop-filter: blur(12px);',
      '  -webkit-backdrop-filter: blur(12px);',
      '  border-top: 1px solid rgba(255,255,255,0.06);',
      '  padding: 0.75rem 1rem;',
      '  transform: translateY(100%);',
      '  transition: transform 0.4s ease;',
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
      '}',
      '#support-prompt-banner.sp-visible {',
      '  transform: translateY(0);',
      '}',
      '#support-prompt-banner .sp-inner {',
      '  max-width: 720px; margin: 0 auto;',
      '  display: flex; align-items: center; gap: 1rem;',
      '  flex-wrap: wrap;',
      '}',
      '#support-prompt-banner .sp-text {',
      '  flex: 1; min-width: 200px;',
      '  color: #c8c4d0; font-size: 0.85rem; line-height: 1.4;',
      '}',
      '#support-prompt-banner .sp-text strong {',
      '  color: #e8e6f0;',
      '}',
      '#support-prompt-banner .sp-cta {',
      '  background: ' + accent + ';',
      '  color: #050508; border: none; border-radius: 5px;',
      '  padding: 0.5rem 1.2rem; cursor: pointer;',
      '  font-size: 0.78rem; font-weight: 600;',
      '  letter-spacing: 0.05em; text-transform: uppercase;',
      '  white-space: nowrap;',
      '  transition: opacity 0.15s;',
      '}',
      '#support-prompt-banner .sp-cta:hover { opacity: 0.85; }',
      '#support-prompt-banner .sp-close {',
      '  background: transparent; border: none;',
      '  color: #6b6578; font-size: 1.3rem; line-height: 1;',
      '  cursor: pointer; padding: 0.25rem 0.4rem;',
      '  transition: color 0.15s;',
      '}',
      '#support-prompt-banner .sp-close:hover { color: #e8e6f0; }',
    ].join('\n');
    document.head.appendChild(style);

    document.body.appendChild(banner);

    // Trigger animation on next frame
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.classList.add('sp-visible');
      });
    });

    // Track analytics
    try {
      if (window.umami) {
        window.umami.track('support-prompt-shown', { game: gameKey });
      }
    } catch (e) {}

    // ── Events ───────────────────────────────────────────────
    banner.querySelector('.sp-cta').addEventListener('click', function () {
      try {
        if (window.umami) {
          window.umami.track('support-prompt-clicked', { game: gameKey });
        }
      } catch (e) {}

      // Open PWYC modal if available, otherwise open inline modal
      if (window.PWYC && typeof window.PWYC.open === 'function') {
        window.PWYC.open(gameKey);
      } else if (typeof window.openPWYCModal === 'function') {
        window.openPWYCModal();
      } else {
        console.error('support-prompt.js: no PWYC modal available — ensure pwyc.js is loaded');
      }
      dismissBanner(banner);
    });

    banner.querySelector('.sp-close').addEventListener('click', function () {
      try {
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
      } catch (e) {}
      dismissBanner(banner);
    });
  }

  function dismissBanner(banner) {
    banner.classList.remove('sp-visible');
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 500);
  }

}());
