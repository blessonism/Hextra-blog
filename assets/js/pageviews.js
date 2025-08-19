(function () {
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  function idle(fn) {
    (window.requestIdleCallback || function (cb) { setTimeout(cb, 0); })(fn);
  }

  function normalizeSlug(s) {
    try {
      if (!s) return location.pathname;
      if (!s.startsWith("/")) s = "/" + s;
      if (!s.endsWith("/")) s = s + "/";
      return s;
    } catch (_) {
      return location.pathname;
    }
  }

  function updateViews(el) {
    const slug = normalizeSlug(el.dataset.slug || location.pathname);
    const key = "pv:" + slug;
    const now = Date.now();
    const ttl = 8 * 60 * 60 * 1000; // 8 hours
    let last = 0;
    try { last = parseInt(localStorage.getItem(key) || "0", 10) || 0; } catch (_) {}

    const shouldInc = !last || (now - last > ttl);
    const url = "/api/views?slug=" + encodeURIComponent(slug);

    const doGet = () => fetch(url, { cache: "no-store", credentials: "same-origin" })
      .then(r => r.ok ? r.json() : { count: 0 })
      .then(d => {
        const n = (d && typeof d.count === "number") ? d.count : 0;
        const target = el.querySelector("[aria-label='views']") || el;
        target.textContent = n.toLocaleString();
      })
      .catch(() => {});

    const doPost = () => fetch(url, { method: "POST", keepalive: true, credentials: "same-origin" })
      .catch(() => {});

    const afterPost = () => {
      try { localStorage.setItem(key, String(now)); } catch (_) {}
      return doGet();
    };

    if (shouldInc) doPost().finally(afterPost);
    else doGet();
  }

  ready(function () {
    idle(function () {
      const el = document.querySelector("[data-page-views]");
      if (el) updateViews(el);
    });
  });
})();

