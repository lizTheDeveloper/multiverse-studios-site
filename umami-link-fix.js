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

  // Fire-and-forget tracking. Never blocks or cancels navigation.
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0) return; // plain left-clicks only
    var a = e.target.closest && e.target.closest('a[' + SKIP + ']');
    if (!a) return;
    var name = a.getAttribute(SKIP);
    if (!name) return;
    try {
      if (window.umami && typeof window.umami.track === 'function') {
        var data = {};
        var attrs = a.attributes;
        for (var k = 0; k < attrs.length; k++) {
          var at = attrs[k];
          if (at.name.indexOf(PARAM_PREFIX) === 0) {
            data[at.name.slice(PARAM_PREFIX.length)] = at.value;
          }
        }
        window.umami.track(name, data);
      }
    } catch (err) {
      /* tracking must never break navigation */
    }
  }, false);
})();
