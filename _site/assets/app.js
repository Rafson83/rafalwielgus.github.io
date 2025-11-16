const yEl = document.getElementById('y');
if(yEl){ yEl.textContent = new Date().getFullYear(); }

const toggle = document.querySelector('.menu__toggle');
const menu = document.getElementById('menu');
if(toggle && menu){
  toggle.addEventListener('click', ()=>{
    const opened = menu.classList.toggle('menu--open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

// --- Cookie consent (simple, no external deps) ---
(function(){
  const KEY = 'rw_consent_v1'; // store 'accepted' or 'declined'
  const banner = document.getElementById('rw-cookie-banner');
  if(!banner) return;
  const current = localStorage.getItem(KEY);
  const show = () => { banner.style.display = 'block'; };
  const hide = () => { banner.style.display = 'none'; };

  function enableAnalytics(){
    // Place your analytics script injection here (e.g., Plausible/GA4) only after consent:
    // Example (Plausible):
    // const s = document.createElement('script');
    // s.defer = true; s.setAttribute('data-domain','rafalwielgus.eu');
    // s.src = 'https://plausible.io/js/script.js';
    // document.head.appendChild(s);
  }

  if(current === 'accepted'){
    enableAnalytics();
  } else if(current === 'declined'){
    // nothing
  } else {
    show();
  }

  const accept = document.getElementById('rw-consent-accept');
  const decline = document.getElementById('rw-consent-decline');
  if(accept) accept.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    enableAnalytics();
    hide();
  });
  if(decline) decline.addEventListener('click', () => {
    localStorage.setItem(KEY, 'declined');
    hide();
  });

  // Open panel from /cookies page link
  const openers = document.querySelectorAll('#rw-open-consent, #rw-open-consent-inline');
  openers.forEach(el => el.addEventListener('click', (e)=>{ e.preventDefault(); localStorage.removeItem(KEY); show(); }));
})();
// --- /Cookie consent ---