const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function changeIndex(n) {
    showSlides(slideIndex += n);
}

next.addEventListener('click', function() {
    changeIndex(1);
});

prev.addEventListener('click', function() {
    changeIndex(-1);
});