$(function(){

  $('.pets-slider__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slider-arrows slider-arrows__right"></button>',
    prevArrow: '<button type="button" class="slider-arrows slider-arrows__left"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });
  
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

});

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var shelter = document.querySelector('.shelter');
var about = document.querySelector('.about-shelter');

var pets = document.querySelector('.pets');
var slider = document.querySelector('.pets-slider');

var help = document.querySelector('.help');
var helping = document.querySelector('.help-shelter');

var contacts = document.querySelector('.contacts');
var footer = document.querySelector('.footer');


shelter.addEventListener('click', () => {
  scrollTo(about);
});

pets.addEventListener('click', () => {
    scrollTo(slider);
});

help.addEventListener('click', () => {
  scrollTo(helping);
});

contacts.addEventListener('click', () => {
  scrollTo(footer);
});