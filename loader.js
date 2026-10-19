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

  const DURATION = 1680; // Exactly 1.68 seconds
  const t0 = performance.now();

  // Sync bilingual microcopy immediately
  const isBn = root.getAttribute('data-lang') === 'bn' || root.getAttribute('lang') === 'bn';
  const nameEl = el.querySelector('[data-sl-name]');
  const statusEl = el.querySelector('[data-sl-status]');
  if (isBn) {
    if (nameEl) nameEl.textContent = nameEl.getAttribute('data-bn') || 'হুমায়ুন কবির';
    if (statusEl) statusEl.textContent = statusEl.getAttribute('data-bn') || 'পোর্টফোলিও প্রস্তুত হচ্ছে...';
  }

  const bar = el.querySelector('.sl-bar i');
  const pctEl = el.querySelector('[data-sl-percent]');
  const toBnNum = (num) => String(num).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);

  // Ensure initial 0% state is clamped and cleanly painted
  if (bar) el.style.setProperty('--p', '0');
  if (pctEl) pctEl.textContent = isBn ? '০%' : '0%';

  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    if (bar) el.style.setProperty('--p', '1');
    if (pctEl) pctEl.textContent = isBn ? '১০০%' : '100%';

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
  };

  // 60fps/120fps synchronized progress & percentage tick across exactly 1.68s
  const step = (now) => {
    if (done) return;
    const currentTime = (typeof now === 'number' && now > 0) ? now : performance.now();
    const elapsed = Math.max(0, currentTime - t0);
    const progress = Math.min(1, Math.max(0, elapsed / DURATION));

    // Smooth natural easing: begins briskly, smoothly glides to 100%
    const pEased = Math.min(1, Math.max(0, 1 - Math.pow(1 - progress, 1.35)));

    if (bar) {
      el.style.setProperty('--p', pEased.toFixed(4));
    }
    if (pctEl) {
      const pct = Math.min(100, Math.max(0, Math.round(pEased * 100)));
      pctEl.textContent = isBn ? `${toBnNum(pct)}%` : `${pct}%`;
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      finish();
    }
  };

  requestAnimationFrame(step);
  root.classList.add('sl-lock');
})();
