/**
 * HUMAYOUN KOBIR PORTFOLIO — BESPOKE SITE LOADER (v1.0.0)
 * Real readiness signals, session-aware bypass on internal navigation,
 * and hard-reload re-activation support.
 */
(() => {
  const el = document.getElementById('site-loader');
  if (!el) return;
  const root = document.documentElement;

  // Check if current visit is a reload (F5 / Ctrl+R / browser refresh)
  let isReload = false;
  try {
    const navEntries = window.performance && performance.getEntriesByType && performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      isReload = navEntries[0].type === 'reload';
    } else if (window.performance && performance.navigation) {
      isReload = performance.navigation.type === 1;
    }
  } catch (e) {}

  let seen = false;
  try {
    seen = sessionStorage.getItem('sl_seen') === '1';
  } catch (e) {}

  // One-time only per session: Bypass on subsequent page navigations (e.g. going to Software HQ),
  // unless user initiates a hard reload.
  if ((seen && !isReload) || root.classList.contains('sl-bypass')) {
    if (el && el.parentNode) el.remove();
    root.classList.remove('sl-lock');
    return;
  }

  const t0 = performance.now();
  const MIN = 400;
  const MAX = 5000;

  // Sync bilingual microcopy immediately
  const isBn = root.getAttribute('data-lang') === 'bn' || root.getAttribute('lang') === 'bn';
  const nameEl = el.querySelector('[data-sl-name]');
  const statusEl = el.querySelector('[data-sl-status]');
  if (isBn) {
    if (nameEl) nameEl.textContent = nameEl.getAttribute('data-bn') || 'হুমায়ুন কবির';
    if (statusEl) statusEl.textContent = statusEl.getAttribute('data-bn') || 'পোর্টফোলিও প্রস্তুত হচ্ছে...';
  }

  const bar = el.querySelector('.sl-bar i');
  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    const elapsed = performance.now() - t0;
    const wait = Math.max(0, MIN - elapsed);

    setTimeout(() => {
      el.classList.add('is-done');
      el.setAttribute('aria-busy', 'false');
      root.classList.remove('sl-lock');
      try {
        sessionStorage.setItem('sl_seen', '1');
      } catch (e) {}
      setTimeout(() => {
        if (el && el.parentNode) el.remove();
        window.dispatchEvent(new CustomEvent('loader:done'));
      }, 550);
    }, wait);
  };

  // Real progress signals (A 4.3)
  const signals = [
    new Promise(r => document.readyState !== 'loading' ? r() : document.addEventListener('DOMContentLoaded', r, { once: true })),
    document.fonts ? document.fonts.ready.catch(() => {}) : Promise.resolve(),
    new Promise(r => document.readyState === 'complete' ? r() : window.addEventListener('load', r, { once: true }))
  ];

  // Hero image decode signal if present
  const heroImg = document.querySelector('.hero img, .profile-card img, .mark img, .sl-logo-img');
  if (heroImg && heroImg.decode) {
    signals.push(heroImg.decode().catch(() => {}));
  }

  let completedCount = 0;
  signals.forEach(p => {
    p.then(() => {
      completedCount++;
      if (bar) {
        el.style.setProperty('--p', (completedCount / signals.length).toFixed(3));
      }
    });
  });

  Promise.all(signals).then(finish);
  setTimeout(finish, MAX); // Hard fallback safety timer

  root.classList.add('sl-lock');
})();
