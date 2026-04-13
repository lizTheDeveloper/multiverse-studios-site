/* ============================================
   MULTIVERSE STUDIOS — Wiki Discovery Client
   Gates wiki content based on player discoveries
   Requires: matrix-auth.js loaded first
   ============================================ */

(function initWikiClient() {
  'use strict';

  var LORE_API = window.location.hostname === 'localhost'
    ? 'http://localhost:3400'
    : 'https://play.multiversestudios.xyz/lore';

  // ── State ──────────────────────────────────────────────

  var discoveries = null; // { "species/norn": { tier: 2 }, ... }

  // ── DOM helpers ────────────────────────────────────────

  function createPlaceholder() {
    var el = document.createElement('div');
    el.className = 'lore-locked-placeholder';
    el.innerHTML = '<span class="lock-icon">\u{1F512}</span>' +
      '<span class="lock-text">Undiscovered</span>';
    return el;
  }

  function createAuthBanner() {
    var el = document.createElement('div');
    el.className = 'wiki-auth-banner';
    el.innerHTML = 'Sign in to track your discoveries. ' +
      '<a href="#" onclick="window.matrixAuth && window.matrixAuth.showLoginModal(); return false;">Sign in</a>';
    return el;
  }

  function createDiscoveryCounter(discovered, total) {
    var el = document.createElement('div');
    el.className = 'wiki-discovery-count';
    el.textContent = discovered + ' / ' + total + ' entries discovered';
    return el;
  }

  // ── Gating logic ───────────────────────────────────────

  function gateContent(discoveryMap) {
    var elements = document.querySelectorAll('[data-lore-key]');
    var total = elements.length;
    var discovered = 0;

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-lore-key');
      var isDefault = el.getAttribute('data-lore-default') === 'visible';

      if (isDefault) {
        // Always visible (Norn)
        el.style.display = '';
        el.classList.add('lore-unlocked');
        // Still apply tier gating if logged in
        if (discoveryMap && discoveryMap[key]) {
          el.classList.add('lore-tier-' + discoveryMap[key].tier);
        } else {
          // Show tier 0 at minimum for default-visible
          el.classList.add('lore-tier-0');
        }
        discovered++;
        continue;
      }

      if (discoveryMap && discoveryMap[key]) {
        // Player has discovered this
        el.style.display = '';
        el.classList.add('lore-unlocked');
        el.classList.add('lore-tier-' + discoveryMap[key].tier);
        discovered++;
      } else {
        // Not discovered — replace with placeholder
        var placeholder = createPlaceholder();
        placeholder.style.display = '';
        el.parentNode.insertBefore(placeholder, el);
        // el stays hidden via CSS default
      }
    }

    // Update species nav links
    var navLinks = document.querySelectorAll('nav[aria-label="Jump to species"] a');
    for (var j = 0; j < navLinks.length; j++) {
      var href = navLinks[j].getAttribute('href');
      if (!href || href.charAt(0) !== '#') continue;
      var targetId = href.substring(1);
      var target = document.getElementById(targetId);
      if (!target) continue;
      var targetKey = target.getAttribute('data-lore-key');
      if (!targetKey) continue;
      var targetDefault = target.getAttribute('data-lore-default') === 'visible';
      if (!targetDefault && !(discoveryMap && discoveryMap[targetKey])) {
        navLinks[j].classList.add('lore-nav-locked');
      }
    }

    // Insert discovery counter after first h1
    var h1 = document.querySelector('h1');
    if (h1 && discoveryMap) {
      var counter = createDiscoveryCounter(discovered, total);
      h1.parentNode.insertBefore(counter, h1.nextSibling);
    }

    return { discovered: discovered, total: total };
  }

  // ── API fetch ──────────────────────────────────────────

  function fetchDiscoveries(userId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', LORE_API + '/api/lore/wiki');
    xhr.setRequestHeader('X-Matrix-User-Id', userId);
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          var map = {};
          var entries = data.entries || [];
          for (var i = 0; i < entries.length; i++) {
            map[entries[i].id] = { tier: entries[i].tier };
          }
          callback(null, map);
        } catch (e) {
          callback(e, null);
        }
      } else {
        callback(new Error('Lore API returned ' + xhr.status), null);
      }
    };
    xhr.onerror = function () {
      callback(new Error('Lore API unreachable'), null);
    };
    xhr.send();
  }

  // ── Init ───────────────────────────────────────────────

  function init() {
    // Check if matrixAuth is available
    if (!window.matrixAuth) {
      console.warn('[wiki-client] matrixAuth not loaded, showing logged-out state');
      gateContent(null);
      insertAuthBanner();
      return;
    }

    var userId = window.matrixAuth.getUserId();

    if (!userId) {
      // Not logged in — show only defaults
      gateContent(null);
      insertAuthBanner();
      return;
    }

    // Logged in — fetch discoveries then gate
    fetchDiscoveries(userId, function (err, map) {
      if (err) {
        console.warn('[wiki-client] Failed to fetch discoveries:', err.message);
        // Fallback: show only defaults
        gateContent(null);
        return;
      }
      discoveries = map;
      gateContent(map);
    });
  }

  function insertAuthBanner() {
    var breadcrumb = document.querySelector('.wiki-breadcrumb');
    if (breadcrumb) {
      breadcrumb.parentNode.insertBefore(createAuthBanner(), breadcrumb.nextSibling);
    }
  }

  // Wait for matrixAuth to be ready, or init after short timeout
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      // Give matrixAuth a moment to init
      window.addEventListener('matrixAuthReady', init, { once: true });
      // Fallback if matrixAuthReady never fires
      setTimeout(function () {
        if (!discoveries) init();
      }, 2000);
    });
  } else {
    window.addEventListener('matrixAuthReady', init, { once: true });
    setTimeout(function () {
      if (!discoveries) init();
    }, 2000);
  }

})();
