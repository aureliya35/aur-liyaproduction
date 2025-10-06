export function renderHeader(el){
  el.className = 'navbar';
  el.innerHTML = `
    <button data-nav="#/home">🏠 Home</button>
    <button data-nav="#/modules">🧩 Modules</button>
    <button data-nav="#/module/01-trustos">🔐 Trust</button>
    <button data-nav="#/module/02-sovereignwealth">💰 Wealth</button>
    <button data-nav="#/module/03-mirrorme">🪞 Mirror</button>
    <button data-nav="#/module/04-boardroomaccess">🏛️ Boardroom</button>
    <input id="app-search" placeholder="Search modules…" style="margin-left:12px;padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.1);color:white;min-width:220px"/>
  `;
  el.addEventListener('click', (e)=>{
    const tgt = e.target.closest('[data-nav]');
    if(tgt){ location.hash = tgt.getAttribute('data-nav'); }
  });
  const search = el.querySelector('#app-search');
  search.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      location.hash = '#/search?q=' + encodeURIComponent(search.value.trim());
    }
  });
}
