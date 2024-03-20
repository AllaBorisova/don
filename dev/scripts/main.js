Fancybox.bind('[data-fancybox]', {});

//faq toggle
let dropdownMenuItemTitles = document.querySelectorAll('.section-faq__name');
dropdownMenuItemTitles.forEach((menuItemTitle) => {
  menuItemTitle.addEventListener('click', (e) => {
    const menuItemData = e.target.nextElementSibling;
    const menuItemParent = e.target.parentElement;
    menuItemData.style.setProperty(
      '--openHeight',
      menuItemData.scrollHeight + 'px'
    );
    menuItemParent.classList.toggle('active');
  });
});

//mobile menu
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('is-active');
  body.classList.toggle('open-menu');
});

//for animate label
let formLabels = document.querySelectorAll('.form__animate');
formLabels.forEach((formLabel) => {
  const formLabelParent = formLabel.parentElement;

  formLabel.addEventListener('click', (e) => {
    formLabelParent.classList.add('focused');
  });

  formLabel.addEventListener('focusout', (e) => {
    const inputValue = formLabel.value;
    if (inputValue == '') {
      formLabel.classList.remove('filled');
      formLabelParent.classList.remove('focused');
    } else {
      formLabel.classList.add('filled');
    }
  });
});

//search show input and results
const searchInput = document.querySelector('.header .search__input');
const searchBlock = document.querySelector('.header .search');
const searchIcon = document.querySelector('.header .search__button');
const header = document.querySelector('.header');

searchIcon.addEventListener('click', (e) => {
  if (!header.classList.contains('search-active')) {
    e.preventDefault();
  }
  header.classList.add('search-active');
  searchInput.focus();
});

searchInput.addEventListener('keyup', (e) => {
  searchBlock.classList.add('show-results');
});

//hide search ad results
document.addEventListener('mouseup', (e) => {
  if (!e.composedPath().includes(searchBlock)) {
    // if (!searchBlock.is(e.target) && searchBlock.has(e.target).length === 0) {
    header.classList.remove('search-active');
    searchBlock.classList.remove('show-results');
  }
});

//sliders

const swiperActions = new Swiper('.section-slider-actions', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.section-slider-actions__next',
    prevEl: '.section-slider-actions__prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

const swiperGallery = new Swiper('.section-slider-gallery', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.section-slider-gallery__next',
    prevEl: '.section-slider-gallery__prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperNews = new Swiper('.section-slider-news', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.section-slider-news__next',
    prevEl: '.section-slider-news__prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperLicenses = new Swiper('.section-slider-licenses', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.section-slider-licenses__next',
    prevEl: '.section-slider-licenses__prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperMain = new Swiper('.main-slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.main-slider__next',
    prevEl: '.main-slider__prev',
  },
  pagination: {
    el: '.main-slider__pagination',
    type: 'fraction',
  },
});
