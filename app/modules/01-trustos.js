export default {
  id: "01-trustos",
  name: "TrustOS",
  async render(el){
    el.innerHTML = `
      <section class="vercel-home" style="min-height:calc(100vh - 60px);padding-top:24px">
        <div class="card" style="max-width:860px">
          <h2>🔐 TrustOS</h2>
          <p>This module checks server time via <code>/api/time</code> and can load a mock trust feed.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button id="btnTime">Get Server Time</button>
            <button id="btnFeed">Load Trust Feed</button>
            <a href="#/modules" style="margin-left:auto">↩ Back to Modules</a>
          </div>
          <pre id="out" style="margin-top:12px">Ready…</pre>
        </div>
      </section>
    `;

    const out = (v)=> el.querySelector('#out').textContent = typeof v==='string' ? v : JSON.stringify(v, null, 2);

    el.querySelector('#btnTime').onclick = async ()=>{
      try{ const r = await fetch('/api/time'); out(await r.json()); }
      catch(e){ out(String(e)); }
    };

    el.querySelector('#btnFeed').onclick = async ()=>{
      try{ const r = await fetch('/api/trust-feed'); out(await r.json()); }
      catch(e){ out(String(e)); }
    };
  }
};
