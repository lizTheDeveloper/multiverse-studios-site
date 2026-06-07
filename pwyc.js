/* ============================================
   MULTIVERSE STUDIOS — Pay What You Can
   Tier anchor UI for Stripe payment flow.
   Usage: add data-pwyc-game="precursors|mvee|cotb|nel"
   to any support button/link to trigger the modal.
   ============================================ */

(function () {
  'use strict';

  // ── Game configurations ──────────────────────────────────────

  var GAMES = {
    precursors: {
      gameKey: 'precursors',
      playUrl: 'https://play.multiversestudios.xyz',
      name: 'Precursors: Origins of Folklore',
      tagline: 'Real genetics. Real biochemistry. Real AI minds.',
      accent: '#ff3d7f',   // --gene-pink
      accentVar: 'var(--gene-pink, #ff3d7f)',
    },
    mvee: {
      gameKey: 'mvee',
      playUrl: 'https://play.multiversestudios.xyz',
      name: 'MVEE',
      tagline: 'A living ecological simulation.',
      accent: '#ff6b35',   // --ember
      accentVar: 'var(--ember, #ff6b35)',
    },
    cotb: {
      gameKey: 'cotb',
      playUrl: 'https://play.multiversestudios.xyz/cultures-of-the-belt/',
      name: 'Cultures of the Belt',
      tagline: 'Build civilizations. Survive the belt.',
      accent: '#7b68ee',   // --signal
      accentVar: 'var(--signal, #7b68ee)',
    },
    nel: {
      gameKey: 'nel',
      playUrl: 'https://play.multiversestudios.xyz',
      name: 'Never Ever Land',
      tagline: 'Free forever. Support if it means something to you.',
      accent: '#00ffc8',   // --biolume
      accentVar: 'var(--biolume, #00ffc8)',
      freeForever: true,
    },
    breach: {
      gameKey: 'breach',
      playUrl: 'https://play.multiversestudios.xyz/breach/',
      name: 'BREACH.MMO',
      tagline: "Attack or defend. Don't get caught.",
      accent: '#00ff41',   // matrix green
      accentVar: 'var(--matrix-green, #00ff41)',
    },
  };

  // Checkout session endpoint — creates Stripe Checkout Sessions server-side
  var CHECKOUT_API_URL = 'https://pay.multiversestudios.xyz/create-checkout-session';

  var TIERS = [
    {
      id: 'spark',
      amount: 500,       // cents
      label: 'Spark',
      sublabel: '$5',
      desc: 'Keeps a server running for a day.',
    },
    {
      id: 'signal',
      amount: 1500,      // cents
      label: 'Signal',
      sublabel: '$15',
      desc: 'Funds a week of development.',
      isDefault: true,
    },
    {
      id: 'beacon',
      amount: 2500,      // cents
      label: 'Beacon',
      sublabel: '$25',
      desc: 'Helps ship the next update.',
    },
    {
      id: 'custom',
      amount: null,
      label: 'Custom',
      sublabel: 'Your call',
      desc: 'Name your price.',
      isCustom: true,
    },
  ];

  // ── Styles ───────────────────────────────────────────────────

  var style = document.createElement('style');
  style.textContent = [
    '#pwyc-overlay {',
    '  position: fixed; inset: 0; z-index: 99998;',
    '  background: rgba(5,5,8,0.88);',
    '  backdrop-filter: blur(16px);',
    '  -webkit-backdrop-filter: blur(16px);',
    '  display: flex; align-items: center; justify-content: center;',
    '  padding: 1rem;',
    '  opacity: 0; transition: opacity 0.25s ease;',
    '  pointer-events: none;',
    '}',
    '#pwyc-overlay.pwyc-open {',
    '  opacity: 1; pointer-events: all;',
    '}',
    '#pwyc-modal {',
    '  background: #111118;',
    '  border: 1px solid rgba(255,255,255,0.08);',
    '  border-radius: 10px;',
    '  max-width: 620px; width: 100%;',
    '  padding: 2rem;',
    '  position: relative;',
    '  transform: translateY(16px); transition: transform 0.25s ease;',
    '}',
    '#pwyc-overlay.pwyc-open #pwyc-modal { transform: translateY(0); }',
    '#pwyc-close {',
    '  position: absolute; top: 1rem; right: 1rem;',
    '  background: transparent; border: none; cursor: pointer;',
    '  color: #8a8694; font-size: 1.4rem; line-height: 1;',
    '  padding: 0.25rem 0.5rem; border-radius: 4px;',
    '  transition: color 0.15s;',
    '}',
    '#pwyc-close:hover { color: #e8e6f0; }',
    '#pwyc-game-name {',
    '  font-family: var(--font-display, "Syne", sans-serif);',
    '  font-size: 0.7rem; font-weight: 700;',
    '  letter-spacing: 0.14em; text-transform: uppercase;',
    '  color: #8a8694; margin-bottom: 0.25rem;',
    '}',
    '#pwyc-heading {',
    '  font-family: var(--font-display, "Syne", sans-serif);',
    '  font-size: clamp(1.3rem, 3vw, 1.7rem);',
    '  font-weight: 800; color: #e8e6f0;',
    '  margin-bottom: 0.35rem; line-height: 1.2;',
    '}',
    '#pwyc-tagline {',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.78rem; color: #8a8694;',
    '  margin-bottom: 1.75rem;',
    '}',
    '.pwyc-tiers {',
    '  display: grid;',
    '  grid-template-columns: repeat(4, 1fr);',
    '  gap: 0.5rem; margin-bottom: 1.5rem;',
    '}',
    '@media (max-width: 540px) {',
    '  .pwyc-tiers { grid-template-columns: repeat(2, 1fr); }',
    '}',
    '.pwyc-tier {',
    '  background: rgba(255,255,255,0.03);',
    '  border: 1px solid rgba(255,255,255,0.07);',
    '  border-radius: 8px;',
    '  padding: 0.9rem 0.5rem;',
    '  cursor: pointer; text-align: center;',
    '  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;',
    '  -webkit-user-select: none; user-select: none;',
    '}',
    '.pwyc-tier:hover {',
    '  border-color: rgba(255,255,255,0.18);',
    '  background: rgba(255,255,255,0.06);',
    '}',
    '.pwyc-tier.pwyc-selected {',
    '  background: rgba(255,255,255,0.06);',
    '}',
    '.pwyc-tier-sublabel {',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 1rem; font-weight: 500;',
    '  color: #e8e6f0; margin-bottom: 0.2rem;',
    '  line-height: 1.2;',
    '}',
    '.pwyc-tier-name {',
    '  font-family: var(--font-display, "Syne", sans-serif);',
    '  font-size: 0.65rem; font-weight: 700;',
    '  letter-spacing: 0.1em; text-transform: uppercase;',
    '  color: #8a8694; margin-bottom: 0.4rem;',
    '}',
    '.pwyc-tier-desc {',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.6rem; color: #4a4656;',
    '  line-height: 1.4;',
    '}',
    '.pwyc-tier.pwyc-selected .pwyc-tier-desc { color: #6b6578; }',
    '#pwyc-custom-row {',
    '  display: none;',
    '  margin-bottom: 1.25rem;',
    '  align-items: center; gap: 0.75rem;',
    '}',
    '#pwyc-custom-row.pwyc-visible { display: flex; }',
    '#pwyc-custom-label {',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.8rem; color: #8a8694;',
    '  white-space: nowrap;',
    '}',
    '#pwyc-custom-input {',
    '  flex: 1; background: rgba(255,255,255,0.04);',
    '  border: 1px solid rgba(255,255,255,0.12);',
    '  border-radius: 6px;',
    '  padding: 0.6rem 0.8rem;',
    '  color: #e8e6f0;',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 1rem;',
    '  outline: none; transition: border-color 0.15s;',
    '}',
    '#pwyc-custom-input:focus { border-color: rgba(255,255,255,0.3); }',
    '#pwyc-cta {',
    '  display: block; width: 100%;',
    '  padding: 0.9rem 1.5rem;',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.8rem; font-weight: 500;',
    '  letter-spacing: 0.1em; text-transform: uppercase;',
    '  border: none; border-radius: 6px;',
    '  cursor: pointer; transition: all 0.2s;',
    '  text-align: center;',
    '}',
    '#pwyc-note {',
    '  margin-top: 1rem;',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.68rem; color: #4a4656;',
    '  text-align: center; line-height: 1.6;',
    '}',
    '#pwyc-note a { color: #6b6578; text-decoration: underline; }',
    '#pwyc-note a:hover { color: #8a8694; }',
    '#pwyc-free-link {',
    '  display: block; text-align: center;',
    '  margin-top: 0.75rem;',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.7rem; color: #8a8694;',
    '  cursor: pointer; background: none; border: none;',
    '  text-decoration: underline; text-underline-offset: 2px;',
    '  transition: color 0.15s;',
    '}',
    '#pwyc-free-link:hover { color: #e8e6f0; }',
    '#pwyc-ethos {',
    '  font-family: var(--font-mono, "JetBrains Mono", monospace);',
    '  font-size: 0.68rem; color: #6b6578;',
    '  text-align: center; margin-bottom: 1rem;',
    '  font-style: italic;',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // ── State ────────────────────────────────────────────────────

  var currentGame = null;
  var selectedTier = TIERS.find(function (t) { return t.isDefault; });
  var overlay = null;
  var tierEls = [];

  // ── Build modal ──────────────────────────────────────────────

  function buildModal() {
    overlay = document.createElement('div');
    overlay.id = 'pwyc-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Support this game — pay what you can');

    overlay.innerHTML = [
      '<div id="pwyc-modal">',
      '  <button id="pwyc-close" aria-label="Close">&times;</button>',
      '  <div id="pwyc-game-name"></div>',
      '  <div id="pwyc-heading">Support this game</div>',
      '  <div id="pwyc-tagline"></div>',
      '  <div id="pwyc-ethos">Independent studio. Player-funded. No investors, no ads.</div>',
      '  <div class="pwyc-tiers" role="radiogroup" aria-label="Choose your contribution">',
        TIERS.map(function (tier, i) {
          return [
            '<button class="pwyc-tier" data-tier-idx="' + i + '"',
            '  role="radio" aria-checked="false"',
            '  aria-label="' + tier.label + ' — ' + tier.sublabel + '"',
            '>',
            '  <div class="pwyc-tier-sublabel">' + tier.sublabel + '</div>',
            '  <div class="pwyc-tier-name">' + tier.label + '</div>',
            '  <div class="pwyc-tier-desc">' + tier.desc + '</div>',
            '</button>',
          ].join('');
        }).join(''),
      '  </div>',
      '  <div id="pwyc-custom-row">',
      '    <span id="pwyc-custom-label">$</span>',
      '    <input id="pwyc-custom-input" type="number" min="1" max="9999"',
      '      placeholder="Enter amount" aria-label="Custom amount in dollars">',
      '  </div>',
      '  <button id="pwyc-cta">Support</button>',
      '  <a id="pwyc-free-link" role="link">or play free — no account needed →</a>',
      '  <div id="pwyc-note">',
      '    Every contribution directly funds development and keeps the servers running.',
      '    <br><a href="/devlog/pay-what-you-can.html">Why we use pay-what-you-can pricing →</a>',
      '  </div>',
      '</div>',
    ].join('');

    document.body.appendChild(overlay);

    // Cache tier elements
    tierEls = Array.prototype.slice.call(overlay.querySelectorAll('.pwyc-tier'));

    // Event: close
    overlay.querySelector('#pwyc-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    // Event: tier selection
    tierEls.forEach(function (el, i) {
      el.addEventListener('click', function () { selectTier(i); });
    });

    // Event: CTA
    overlay.querySelector('#pwyc-cta').addEventListener('click', handleCTA);

    // Event: play free link
    overlay.querySelector('#pwyc-free-link').addEventListener('click', function () {
      if (currentGame) window.location.href = currentGame.playUrl;
    });

    // Keyboard: arrow keys within tier group
    overlay.querySelector('.pwyc-tiers').addEventListener('keydown', function (e) {
      var idx = tierEls.indexOf(document.activeElement);
      if (idx < 0) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        selectTier((idx + 1) % tierEls.length);
        tierEls[selectedTierIdx()].focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        selectTier((idx - 1 + tierEls.length) % tierEls.length);
        tierEls[selectedTierIdx()].focus();
      }
    });
  }

  function selectedTierIdx() {
    return TIERS.indexOf(selectedTier);
  }

  function selectTier(idx) {
    selectedTier = TIERS[idx];

    tierEls.forEach(function (el, i) {
      var isSelected = i === idx;
      el.classList.toggle('pwyc-selected', isSelected);
      el.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      if (isSelected && currentGame) {
        el.style.borderColor = currentGame.accent;
        el.style.boxShadow = '0 0 12px ' + currentGame.accent + '44';
      } else {
        el.style.borderColor = '';
        el.style.boxShadow = '';
      }
    });

    // Show/hide custom input
    var customRow = overlay.querySelector('#pwyc-custom-row');
    if (selectedTier.isCustom) {
      customRow.classList.add('pwyc-visible');
      overlay.querySelector('#pwyc-custom-input').focus();
    } else {
      customRow.classList.remove('pwyc-visible');
    }

    updateCTA();
  }

  function updateCTA() {
    if (!overlay || !currentGame) return;
    var cta = overlay.querySelector('#pwyc-cta');
    var label = selectedTier.isCustom ? 'Support — Custom Amount' : 'Support — ' + selectedTier.sublabel;
    cta.textContent = label + ' →';
    cta.style.background = currentGame.accent;
    cta.style.color = '#050508';
  }

  function handleCTA() {
    if (!currentGame) return;

    var cents;
    if (selectedTier.isCustom) {
      var customInput = overlay.querySelector('#pwyc-custom-input');
      var dollars = parseFloat(customInput.value);
      if (!dollars || dollars < 1) {
        customInput.focus();
        customInput.style.borderColor = 'rgba(255,100,100,0.6)';
        setTimeout(function () { customInput.style.borderColor = ''; }, 1500);
        return;
      }
      cents = Math.round(dollars * 100);
    } else {
      cents = selectedTier.amount;
    }

    var cta = overlay.querySelector('#pwyc-cta');
    var originalText = cta.textContent;
    cta.disabled = true;
    cta.textContent = 'Connecting…';
    cta.style.opacity = '0.6';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', CHECKOUT_API_URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          var data = JSON.parse(xhr.responseText);
          if (data.url) {
            window.location.href = data.url;
            return;
          }
        } catch (e) {
          console.error('PWYC: failed to parse checkout response', e);
        }
      }
      console.error('PWYC: checkout session failed', { status: xhr.status, response: xhr.responseText, game: currentGame.gameKey, amount: cents });
      cta.textContent = 'Something went wrong — try again';
      cta.style.background = '#ff4444';
      setTimeout(function () {
        cta.disabled = false;
        cta.style.opacity = '';
        cta.textContent = originalText;
        updateCTA();
      }, 2000);
    };
    xhr.onerror = function () {
      console.error('PWYC: network error creating checkout session', { game: currentGame.gameKey, amount: cents });
      cta.textContent = 'Connection failed — try again';
      cta.style.background = '#ff4444';
      setTimeout(function () {
        cta.disabled = false;
        cta.style.opacity = '';
        cta.textContent = originalText;
        updateCTA();
      }, 2000);
    };
    xhr.send(JSON.stringify({ game: currentGame.gameKey, amount: cents, source_page: window.location.href }));
  }

  // ── Open / close ─────────────────────────────────────────────

  function openModal(gameKey) {
    currentGame = GAMES[gameKey] || GAMES.precursors;

    if (!overlay) buildModal();

    // Update game context
    overlay.querySelector('#pwyc-game-name').textContent = currentGame.name;
    overlay.querySelector('#pwyc-tagline').textContent = currentGame.tagline;

    // Update free link href
    var freeLink = overlay.querySelector('#pwyc-free-link');
    if (freeLink) freeLink.href = currentGame.playUrl;

    // Reset to default tier
    var defaultIdx = TIERS.findIndex(function (t) { return t.isDefault; });
    selectTier(defaultIdx);

    // Show
    overlay.classList.add('pwyc-open');
    overlay.querySelector('#pwyc-modal').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('pwyc-open');
    document.body.style.overflow = '';
  }

  // ── Wire up existing support buttons ─────────────────────────

  function init() {
    document.querySelectorAll('[data-pwyc-game]').forEach(function (el) {
      var game = el.getAttribute('data-pwyc-game');
      // Intercept click
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(game);
      });
      // Strip href so middle-click doesn't bypass
      if (el.tagName === 'A') {
        el.setAttribute('data-pwyc-href', el.href);
        el.removeAttribute('href');
        el.style.cursor = 'pointer';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  window.PWYC = { open: openModal, close: closeModal };

}());
