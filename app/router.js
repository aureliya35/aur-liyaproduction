function parseHash(){
  const h = location.hash || '#/home';
  const [path, query=''] = h.slice(1).split('?');
  const parts = path.split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  return {parts, params};
}
function renderHome(main){
  main.innerHTML = `
    <section class="hero">
      <div class="halo"></div>
      <h1>Welcome back, Sabrina ✨</h1>
      <p>Your Sovereign AI Lifestyle System is live. Open a module to test API routes.</p>
      <div style="margin-top:14px;">
        <a href="#/modules" class="card-btn">Browse Modules</a>
      </div>
    </section>`;
}
function renderModuleGrid(main, Registry){
  const cards = Registry.list().map(m => `
    <div class="card">
      <h3>${m.name}</h3>
      <p>ID: ${m.id}</p>
      <a href="#/module/${m.id}">Open</a>
    </div>`).join('');
  main.innerHTML = `<h2>All Modules</h2><div class="grid">${cards}</div>`;
}
function renderSearch(main, Registry, q){
  const needle = (q||'').toLowerCase();
  const results = Registry.list().filter(m =>
    m.name.toLowerCase().includes(needle) || m.id.toLowerCase().includes(needle)
  );
  if(!results.length){ main.innerHTML = `<p>No results for <b>${q}</b>.</p>`; return; }
  const cards = results.map(m => `
    <div class="card">
      <h3>${m.name}</h3>
      <p>ID: ${m.id}</p>
      <a href="#/module/${m.id}">Open</a>
    </div>`).join('');
  main.innerHTML = `<h2>Search: ${q}</h2><div class="grid">${cards}</div>`;
}
export function startRouter(main, Registry){
  function route(){
    const {parts, params} = parseHash();
    if(parts.length===0 || parts[0]==='home'){ renderHome(main); return; }
    if(parts[0]==='modules'){ renderModuleGrid(main, Registry); return; }
    if(parts[0]==='search'){ renderSearch(main, Registry, params.get('q')||''); return; }
    if(parts[0]==='module' && parts[1]){
      const mod = Registry.get(parts[1]);
      if(!mod){ main.innerHTML = '<p>Module not found.</p>'; return; }
      main.innerHTML = ''; const mount = document.createElement('div'); main.appendChild(mount); mod.render(mount); return;
    }
    main.innerHTML = '<p>Not found.</p>';
  }
  addEventListener('hashchange', route); route();
}
