const body = document.querySelector('body');
const headerWrapper = document.querySelector('.header__wrapper');

const newsLink = document.querySelector('.news__link');
const careerLink = document.querySelector('.career__link');
const investorLink = document.querySelector('.investor__link');

const news = document.querySelector('.news');
const career = document.querySelector('.career');
const investors = document.querySelector('.investors');

const newsOffset = news.offsetTop;
const careerOffset = career.offsetTop;
const investorsOffset = investors.offsetTop;

function checkScrollbar() {
    if (getComputedStyle(body).height > '100vh') {
        headerWrapper.style.marginRight = '10px';
    }
    if (window.screen.width < 400) {
        headerWrapper.style.marginRight = '0px';
    }
}

checkScrollbar();

newsLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: newsOffset - 50,
        behavior: 'smooth',
      })
});
careerLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: careerOffset - 50,
        behavior: 'smooth',
      })
});
investorLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: investorsOffset - 50,
        behavior: 'smooth',
      })
});





