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