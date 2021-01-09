var navToggle = document.querySelector('.page-header__nav-toggle');
var navMain = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--nojs');

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

// var catImageFat = document.querySelector('.example__image--before');
// var catImageSkinny = document.querySelector('.example__image--after');
// var beforeBtn = document.querySelector('.slider__description--before');
// var afterBtn = document.querySelector('.slider__description--after');
// var sliderBar = document.querySelector('.slider__bar');

// beforeBtn.addEventListener('click', function() {
//     catImageFat.classList.remove('example__image--hidden');
//     catImageSkinny.classList.add('example__image--hidden');
//     sliderBar.classList.remove('slider__bar--after');
//     sliderBar.classList.add('slider__bar--before');
// });

// afterBtn.addEventListener('click', function() {
//     catImageSkinny.classList.remove('example__image--hidden');
//     catImageFat.classList.add('example__image--hidden');
//     sliderBar.classList.remove('slider__bar--before');
//     sliderBar.classList.add('slider__bar--after');
// });

