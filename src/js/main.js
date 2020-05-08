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