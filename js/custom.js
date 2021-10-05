$(document).ready(function(){
    // hero(banner) slider
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
      });

    // animation css when scroll
    new WOW().init();

    // night bird dj's slider
    $('.dj-slider').slick({
      prevArrow: '<i class="fa fa-chevron-left prev-arrow"></i>',
      nextArrow: '<i class="fa fa-chevron-right next-arrow"></i>',
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode : true ,
      centerPadding : '0px',
    })

    // upcoming events slider
    $('.event-item-slider').slick({
      arrows: false,
      autoplay: true,
      asNavFor: '.event-text-slider',
    });

    $('.event-text-slider').slick({
      arrows: false,
      autoplay: true,
      asNavFor: '.event-item-slider',
    });

    // countdown
    $('#countdown').countdown({
      year: 2021, // YYYY Format
      month: 10, // 1-12
      day: 24, // 1-31
      hour: 0, // 24 hour format 0-23
      minute: 0, // 0-59
      second: 0, // 0-59
    });
    
    $('#countdown1').countdown({
      year: 2021, // YYYY Format
      month: 10, // 1-12
      day: 24, // 1-31
      hour: 0, // 24 hour format 0-23
      minute: 0, // 0-59
      second: 0, // 0-59
    });

    $('#countdown2').countdown({
      year: 2021, // YYYY Format
      month: 10, // 1-12
      day: 24, // 1-31
      hour: 0, // 24 hour format 0-23
      minute: 0, // 0-59
      second: 0, // 0-59
    });
    
    $('#countdown3').countdown({
      year: 2021, // YYYY Format
      month: 10, // 1-12
      day: 24, // 1-31
      hour: 0, // 24 hour format 0-23
      minute: 0, // 0-59
      second: 0, // 0-59
    });


    // night bird blog slider
    $('.blog-image-slider').slick({
      prevArrow: '<i class="fa fa-chevron-left prev-arrow"></i>',
      nextArrow: '<i class="fa fa-chevron-right next-arrow"></i>',
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode : true ,
      centerPadding : '0px',
    })

    // nigth bird's testimonial slider
    $('.text-content-slider').slick({
      prevArrow: '<i class="fa fa-chevron-left prev-arrow"></i>',
      nextArrow: '<i class="fa fa-chevron-right next-arrow"></i>',
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode : true ,
      centerPadding : '0px',
    })


});