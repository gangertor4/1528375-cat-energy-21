const navToggle = document.querySelector('.page-header__nav-toggle');
const navMain = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__nav-toggle--nojs');
navToggle.classList.add('page-header__nav-toggle--burger');

navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('page-header__nav-toggle--burger')) {
        navToggle.classList.remove('page-header__nav-toggle--burger');
        navToggle.classList.add('page-header__nav-toggle--cross');
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navToggle.classList.remove('page-header__nav-toggle--cross');
        navToggle.classList.add('page-header__nav-toggle--burger');
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
    }
});

const beforeBtn = document.querySelector('.slider__description--before');
const afterBtn = document.querySelector('.slider__description--after');
const beforeCat = document.querySelector('.example__image--before');
const afterCat = document.querySelector('.example__image--after');
const beforeBar = document.querySelector('.slider__bar');

afterBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('SHIT');
    beforeCat.classList.add('example__image--hidden');
    afterCat.classList.remove('example__image--hidden');
    beforeBar.classList.remove('slider__bar--before');
    beforeBar.classList.add('slider__bar--after');
})

beforeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    afterCat.classList.add('example__image--hidden');
    beforeCat.classList.remove('example__image--hidden');
    beforeBar.classList.remove('slider__bar--after');
    beforeBar.classList.add('slider__bar--before');
})
