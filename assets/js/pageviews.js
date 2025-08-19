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
        const countEl = el.querySelector(".hx-pv-count") || el.querySelector("[aria-label='views']") || el;
        countEl.textContent = n.toLocaleString();
        try { el.setAttribute("aria-label", `阅读次数: ${n}`); } catch(_) {}
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
    // Secret reveal: Konami code or URL hash '#views'
    (function (){
      try{
        const root = document.documentElement;
        const applyFromHash = ()=>{
          if (location.hash === '#views') root.classList.add('hx-pv-reveal');
          else root.classList.remove('hx-pv-reveal');
        };
        const applyFromQuery = ()=>{
          const u = new URL(location.href);
          if (u.searchParams.get('views') === '1' || u.searchParams.get('pv') === '1') root.classList.add('hx-pv-reveal');
        };
        // initial
        applyFromHash(); applyFromQuery();
        window.addEventListener('hashchange', applyFromHash, {passive:true});

        const keys = [];
        const KONAMI = [38,38,40,40,37,39,37,39,66,65];
        window.addEventListener('keydown', (e)=>{
          const code = (e.key && e.key.length===1) ? e.key.toUpperCase().charCodeAt(0) : (
            e.key === 'ArrowUp' ? 38 : e.key === 'ArrowDown' ? 40 : e.key === 'ArrowLeft' ? 37 : e.key === 'ArrowRight' ? 39 : e.key === 'b' || e.key === 'B' ? 66 : e.key === 'a' || e.key === 'A' ? 65 : 0
          );
          if (!code) return;
          keys.push(code);
          if (keys.length>10) keys.shift();
          if (KONAMI.every((k,i)=>keys[i]===k)){
            root.classList.toggle('hx-pv-reveal');
          }
        }, {passive:true});
      }catch(_){/* noop */}
    })();

})();

