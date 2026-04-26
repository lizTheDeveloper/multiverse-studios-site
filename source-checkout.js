/* Source-as-Course Checkout — wires buy buttons to Stripe via library-api */

(function () {
  'use strict';

  var API = 'https://api.multiversestudios.xyz';

  function extractTier(href) {
    var m = (href || '').match(/#stripe-precursors-(individual|studio|education)/);
    return m ? m[1] : null;
  }

  function getGiteaUsername() {
    var userId = window.matrixAuth && window.matrixAuth.getUserId();
    if (!userId) return '';
    var local = userId.replace(/^@/, '').split(':')[0];
    return local || '';
  }

  async function startCheckout(tier, btn) {
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.5';
    var original = btn.textContent;
    btn.textContent = 'Redirecting to checkout…';

    try {
      var res = await fetch(API + '/me/checkout', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          game: 'precursors',
          tier: tier,
          giteaUsername: getGiteaUsername(),
        }),
      });
      var data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      btn.textContent = original;
      btn.style.pointerEvents = '';
      btn.style.opacity = '';
      alert('Checkout error: ' + err.message);
    }
  }

  function handleBuyClick(e) {
    var link = e.currentTarget;
    var tier = extractTier(link.getAttribute('href'));
    if (!tier) return;

    e.preventDefault();

    if (!window.matrixAuth || !window.matrixAuth.isLoggedIn()) {
      window._pendingCheckoutTier = tier;
      window._pendingCheckoutBtn = link;
      if (window.matrixAuth) {
        window.matrixAuth.showLoginModal();
      } else {
        alert('Sign in to purchase. Authentication is loading — please try again.');
      }
      return;
    }

    startCheckout(tier, link);
  }

  function bindButtons() {
    var links = document.querySelectorAll('a[href^="#stripe-precursors-"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handleBuyClick);
    }
  }

  window.addEventListener('matrixAuthLogin', function () {
    if (window._pendingCheckoutTier && window._pendingCheckoutBtn) {
      var tier = window._pendingCheckoutTier;
      var btn = window._pendingCheckoutBtn;
      window._pendingCheckoutTier = null;
      window._pendingCheckoutBtn = null;
      startCheckout(tier, btn);
    }
  });

  function showPurchaseSuccess() {
    if (new URLSearchParams(window.location.search).get('purchased') !== 'true') return;
    var banner = document.createElement('div');
    banner.style.cssText =
      'position:fixed;top:0;left:0;right:0;z-index:99999;background:var(--biolume,#00ffc8);' +
      'color:var(--void,#050508);text-align:center;padding:14px 20px;font-family:var(--font-mono,monospace);' +
      'font-size:14px;font-weight:600;letter-spacing:0.03em;';
    banner.textContent =
      'Purchase complete! Check your email for confirmation. ' +
      'Your repo access will be granted shortly.';
    var close = document.createElement('button');
    close.textContent = '×';
    close.style.cssText =
      'background:none;border:none;color:inherit;font-size:20px;cursor:pointer;' +
      'position:absolute;right:12px;top:50%;transform:translateY(-50%);padding:0 4px;';
    close.onclick = function () { banner.remove(); };
    banner.appendChild(close);
    document.body.appendChild(banner);
    window.history.replaceState({}, '', window.location.pathname);
  }

  function init() {
    bindButtons();
    showPurchaseSuccess();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
