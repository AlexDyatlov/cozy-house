$(function(){

  $('.pets-slider__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slider-arrows slider-arrows__right"></button>',
    prevArrow: '<button type="button" class="slider-arrows slider-arrows__left"></button>',
  });
  
});