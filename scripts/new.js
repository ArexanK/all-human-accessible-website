// button name navbar
let navToggle = document.querySelector("#navToggle")
let nav = document.querySelector("#nav-links")




navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
})


// slider aanbevelingen


const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentSlide = 0;
const slideWidth = slider.offsetWidth;

prevButton.addEventListener('click', function () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = 2;
    }
    sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

nextButton.addEventListener('click', function () {
    currentSlide++;
    if (currentSlide > 2) {
        currentSlide = 0;
    }
    sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});