$(function(){
  
  const menu = document.querySelector("svg");
  menu.addEventListener("click", morph);
  function morph() {
    menu.classList.toggle("open");
    $('.menu__list').slideToggle();
  }

});

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});

AOS.init();

const swiper = new Swiper('.pets-slider__inner', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-arrows__right',
    prevEl: '.slider-arrows__left',
  },
  pagination: {
    el: '.slick-dots',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    625: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  on: {
    init: function() {
			checkArrow();
    },
    resize: function () {
			checkArrow();
    }
  }
});

function checkArrow() {
  const swiperPrev = document.querySelector('.slider-arrows__left');
  const swiperNext = document.querySelector('.slider-arrows__right');
  const swiperDots = document.querySelector('.swiper-pagination');
  if ( window.innerWidth > 1200  ) {
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
    swiperDots.style.display = 'none';
  } else {
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
    swiperDots.style.display = 'block';
  }
};