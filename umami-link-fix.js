/* umami-link-fix.js — keep navigation independent of analytics.
 *
 * WHY: umami's auto-tracking click handler cancels a link's native navigation
 * (`e.preventDefault()`), fires its tracking request, and only re-navigates
 * inside `request.then(() => location.href = ...)` — with no `.catch()`.
 * If that beacon is blocked (ad blockers, Brave/Firefox tracking protection,
 * the "analytics." subdomain on a blocklist) OR merely stalls/rejects on a
 * flaky network, the `.then()` never runs and the link silently does nothing.
 * Right-click "open in new tab" still works (that's a `contextmenu` event, not
 * `click`, so umami never runs), which is the classic symptom.
 *
 * FIX: decouple navigation from tracking.
 *   1) Before umami initialises, rename `data-umami-event` -> `data-umami-skip`
 *      on navigational <a href> elements so umami's handler never hijacks them.
 *      The browser then navigates natively, every time, regardless of the beacon.
 *   2) Track the click ourselves, fire-and-forget, via `umami.track()` (which
 *      uses navigator.sendBeacon and so survives the unload that native
 *      navigation triggers). We never call preventDefault.
 *
 * LOAD ORDER: this script is `defer` and placed immediately before the umami
 * `<script defer>` tag. Deferred scripts run in document order after parsing,
 * so this renames the anchors before umami ever reads them.
 */
(function () {
  'use strict';

  var ATTR = 'data-umami-event';
  var SKIP = 'data-umami-skip';
  var PARAM_PREFIX = 'data-umami-event-';

  /* ──────────────────────────────────────────────────────────────────────────
   * THE ANALYTICS CHOKEPOINT — window.MVS.track(name, props)
   *
   * Every custom event on this property goes through here. main.js, pwyc.js and
   * the click handler below all call it; nothing calls window.umami.track()
   * directly any more.
   *
   * WHY IT BUFFERS: the umami script is injected dynamically at the bottom of
   * every page. Setting `.defer = true` on a *dynamically created* script does
   * NOT give it ordered-defer semantics — it stays async. So `window.umami` can
   * be absent for hundreds of milliseconds after DOMContentLoaded. That is fine
   * for clicks (a human takes seconds) and fatal for IntersectionObserver /
   * timer / error events, which is exactly the instrumentation being added.
   * Events therefore queue and drain when umami appears.
   *
   * PRE-INIT QUEUE: this file is `defer`, main.js and pwyc.js are not, so they
   * execute BEFORE this one. They push to window.__mvsQueue when window.MVS is
   * not yet installed; install() drains it. Same single path, one buffer.
   * ────────────────────────────────────────────────────────────────────────── */
  var MAX_QUEUE = 100;          // hard cap: a broken page can never balloon memory
  var DRAIN_INTERVAL_MS = 250;
  var DRAIN_TIMEOUT_MS = 20000; // give up waiting for umami after 20s
  var queue = [];
  var drainTimer = null;
  var drainStarted = 0;

  function umamiReady() {
    return !!(window.umami && typeof window.umami.track === 'function');
  }

  function emit(name, props) {
    try {
      window.umami.track(name, props || {});
    } catch (err) {
      /* analytics must never break the page */
    }
  }

  function drain() {
    if (!umamiReady()) {
      if (Date.now() - drainStarted > DRAIN_TIMEOUT_MS) {
        clearInterval(drainTimer);
        drainTimer = null;
        queue.length = 0;
      }
      return;
    }
    clearInterval(drainTimer);
    drainTimer = null;
    for (var i = 0; i < queue.length; i++) emit(queue[i][0], queue[i][1]);
    queue.length = 0;
  }

  function track(name, props) {
    if (!name) return;
    if (umamiReady()) { emit(name, props); return; }
    if (queue.length >= MAX_QUEUE) return;
    queue.push([name, props || {}]);
    if (!drainTimer) {
      drainStarted = Date.now();
      drainTimer = setInterval(drain, DRAIN_INTERVAL_MS);
    }
  }

  window.MVS = window.MVS || {};
  window.MVS.track = track;

  // Drain anything scripts that ran before us pushed to the pre-init array.
  var pre = window.__mvsQueue;
  if (pre && pre.length) {
    for (var p = 0; p < pre.length; p++) track(pre[p][0], pre[p][1]);
    pre.length = 0;
  }

  // Rename data-umami-event -> data-umami-skip on navigational anchors so
  // umami's auto-handler ignores them and native navigation is never cancelled.
  function harden(scope) {
    var anchors = (scope || document).querySelectorAll('a[' + ATTR + '][href]');
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var name = a.getAttribute(ATTR);
      if (name == null) continue;
      a.setAttribute(SKIP, name);
      a.removeAttribute(ATTR);
    }
  }

  // Runs at defer-execution time: DOM is fully parsed, umami not yet initialised.
  harden(document);

  // Cover anchors injected after load (defensive; marketing pages are static).
  if (window.MutationObserver) {
    new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var added = mutations[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var n = added[j];
          if (n.nodeType !== 1) continue;
          if (n.matches && n.matches('a[' + ATTR + '][href]')) {
            harden(n.parentNode || document);
          } else if (n.querySelector && n.querySelector('a[' + ATTR + '][href]')) {
            harden(n);
          }
        }
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  /* ── CTA enrichment ────────────────────────────────────────────────────────
   * The event NAME stays exactly as authored (cta-play-ri, click-buy-nel, …).
   * docs/analytics/event-taxonomy.md already folds every `cta-*` name to the
   * canonical `cta_clicked`, so renaming here would produce nothing new while
   * breaking every report that reads the raw names. What was actually missing
   * is the *properties*: which game, where it went, and from which surface of a
   * 23-screen page. Those are added below.
   * ────────────────────────────────────────────────────────────────────────── */

  // cta-play-precursors -> precursors ; click-buy-nel -> nel ; cta-read-nel-cta -> nel
  var GAME_KEYS = ['precursors', 'solarpunk', 'infiniclicker', 'neverland', 'breach',
                   'cotb', 'mvee', 'tsb', 'nel', 'ri'];
  var GAME_ALIASES = { neverland: 'nel' };

  function gameFor(a, name) {
    var explicit = a.getAttribute('data-pwyc-game') || a.getAttribute('data-analytics-game');
    if (explicit) return explicit;
    var lower = String(name).toLowerCase();
    for (var i = 0; i < GAME_KEYS.length; i++) {
      // token-bounded so "nel" cannot match inside "neverland" ahead of it
      if (new RegExp('(^|[-_])' + GAME_KEYS[i] + '($|[-_])').test(lower)) {
        return GAME_ALIASES[GAME_KEYS[i]] || GAME_KEYS[i];
      }
    }
    return 'none';
  }

  function destinationFor(a) {
    // pwyc.js strips href from [data-pwyc-game] anchors; it stashes the original.
    var href = a.getAttribute('href') || a.getAttribute('data-pwyc-href') || '';
    if (!href) return 'same_property';
    try {
      var url = new URL(href, window.location.href);
      if (url.hostname === window.location.hostname) return 'same_property';
      return url.hostname;
    } catch (err) {
      return 'same_property';
    }
  }

  function surfaceFor(a) {
    var sec = a.closest && a.closest('[data-section]');
    return sec ? sec.getAttribute('data-section') : 'unknown';
  }

  /* Fire-and-forget tracking. Never blocks or cancels navigation.
   *
   * CAPTURE PHASE, deliberately. pwyc.js attaches an element-level click
   * handler to every [data-pwyc-game] anchor that calls e.preventDefault().
   * Element listeners run before a document-level *bubble* listener, so the old
   * `if (e.defaultPrevented) return` guard silently swallowed every Support
   * click on the landing page — click-buy-precursors and click-buy-mvee had one
   * session EACH in their entire history. Capture runs before any element
   * handler, so the event escapes. We never call preventDefault ourselves, so
   * navigation is still untouched. */
  document.addEventListener('click', function (e) {
    if (e.button !== 0) return; // plain left-clicks only
    var a = e.target.closest && e.target.closest('a[' + SKIP + ']');
    if (!a) return;
    var name = a.getAttribute(SKIP);
    if (!name) return;
    try {
      var data = {};
      var attrs = a.attributes;
      for (var k = 0; k < attrs.length; k++) {
        var at = attrs[k];
        if (at.name.indexOf(PARAM_PREFIX) === 0) {
          data[at.name.slice(PARAM_PREFIX.length)] = at.value;
        }
      }
      // Author-supplied data-umami-event-* params win over anything inferred.
      if (data.cta == null) data.cta = name;
      if (data.game == null) data.game = gameFor(a, name);
      if (data.destination == null) data.destination = destinationFor(a);
      if (data.surface == null) data.surface = surfaceFor(a);
      track(name, data);
    } catch (err) {
      /* tracking must never break navigation */
    }
  }, true);
})();
