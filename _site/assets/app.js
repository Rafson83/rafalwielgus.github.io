/**
 * Global JavaScript:
 * 1. Automatyczna aktualizacja roku (footer).
 * 2. Obsługa Off-Canvas/Sidebar Menu (z blokadą scrolla).
 * 3. Prosty mechanizm Cookie Consent.
 */

const body = document.body;

// --- 1. Aktualizacja Roku w Stopce (Wymaga elementu z id="y") ---
const yEl = document.getElementById('y');
if (yEl) {
    yEl.textContent = new Date().getFullYear();
}

// --- 2. Hamburger Menu (Off-Canvas) ---
// Wymaga: .menu__toggle, #menu (element z klasą .menu--open) i #overlay
const toggle = document.querySelector('.menu__toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

if (toggle && menu) {
    const closeMenu = () => {
        menu.classList.remove('is-active');
        body.classList.remove('no-scroll');
        if (overlay) overlay.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
        menu.classList.add('is-active');
        body.classList.add('no-scroll');
        if (overlay) overlay.classList.add('is-active');
        toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
        const isOpened = menu.classList.contains('is-active');
        if (isOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Zamykanie menu po kliknięciu na tło (overlay)
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
}

// --- 3. Cookie consent (Simple) ---
(function() {
    const KEY = 'rw_consent_v1';
    const banner = document.getElementById('rw-cookie-banner');
    if (!banner) return;
    const current = localStorage.getItem(KEY);
    // Używamy "flex" zgodnie z zaleceniem w JS (lub "block" jeśli to proste div)
    const show = () => { banner.style.display = 'flex'; }; 
    const hide = () => { banner.style.display = 'none'; };

    function enableAnalytics() {
        // Umieść tutaj kod ładowania analityki (np. Plausible/GA4)
        console.log("Analytics enabled.");
    }

    // Sprawdzenie stanu i wyświetlenie
    if (current === 'accepted') {
        enableAnalytics();
    } else if (current === 'declined') {
        // nothing
    } else {
        show(); // Pokaż banner, jeśli stan nieznany
    }

    // Obsługa przycisków
    const accept = document.getElementById('rw-consent-accept');
    const decline = document.getElementById('rw-consent-decline');

    if (accept) accept.addEventListener('click', () => {
        localStorage.setItem(KEY, 'accepted');
        enableAnalytics();
        hide();
    });
    if (decline) decline.addEventListener('click', () => {
        localStorage.setItem(KEY, 'declined');
        hide();
    });

    // Resetowanie stanu (np. z linku "Otwórz ponownie panel cookies")
    const openers = document.querySelectorAll('#rw-open-consent, #rw-open-consent-inline');
    openers.forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem(KEY);
        show();
    }));
})();