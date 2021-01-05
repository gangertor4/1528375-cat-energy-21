var navToggle = document.querySelector('.page-header__nav-toggle');
var navMain = document.querySelector('.main-nav');

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