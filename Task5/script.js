const body = document.querySelector('body');
const headerLogo = document.querySelector('.header__logo');
const logo = document.querySelector('.header__logo img');
const headerWrapper = document.querySelector('.header__wrapper');
const about = document.querySelector('.about');
const search = document.querySelector('.search');
const subMenu = document.querySelector('.about__sub-menu');

function checkScrollbar() {
    if (getComputedStyle(body).height > '100vh') {
        headerWrapper.style.marginRight = '10px';
    }
}

checkScrollbar();

window.addEventListener('scroll', () => {
    headerWrapper.classList.add('scrollBottom');
    about.style.padding = '2px';
    search.style.padding = '2px';

    subMenu.style.top = '25px';

    logo.src = 'white_nike.png';
    logo.style.height = '20px';
});