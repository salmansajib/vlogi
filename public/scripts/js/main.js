;(function ($) { 
    "use strict";
    let counter = $('.vlo-counter'),
    mobileMenuIcon = $('.mobile-menu-icon'),
    offcanvasButton = $('.vlo-offcanvas-btn'),
    win = $(window),
    totop = $('.toTop');
    
    offcanvasButton.on('click', function (e) {
        e.preventDefault();

        $('.vlo-offcanvas-btn').removeClass('open');

        $('.vlo-offcanvas-photography').toggleClass('open');

        $('body').toggleClass('overlay-active');

        if ($('.vlo-offcanvas-photography').hasClass('open')) {
            $('.vlo-offcanvas-btn').addClass('open');
        }

    });

    // scrollTop init
    win.on('scroll', function () {
      if (win.scrollTop() > 150) {
          totop.fadeIn();
      } else {
          totop.fadeOut();
      }
    });

    // totop scroller
    totop.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //canvas sidebar
    if (mobileMenuIcon.length) {
      mobileMenuIcon.on('click', function (e) {
          e.preventDefault();
          $(this).toggleClass('open');
          $('.vlo-main-menu .nav-menu').slideToggle();
      });

    }

    $('.vlo-main-menu li.menu-item-has-children').on('click', function (e) {

      e.stopPropagation();

      var thisElement = $(e.target);

      if (!$(thisElement).hasClass('menu-item-has-children')) {
          return;
      }

      thisElement.find('> .sub-menu > li').fadeToggle();
      thisElement.find('> .sub-menu').slideToggle();
      thisElement.toggleClass('menu-expanded');
    });

    //canvas sidebar
    if (mobileMenuIcon.length) {
      mobileMenuIcon.on('click', function (e) {
          e.preventDefault();
          $(this).toggleClass('open');
          $('.vlo-main-menu-2 .nav-menu-2').slideToggle();
      });

    }

    $('.vlo-main-menu-2 li.menu-item-has-children').on('click', function (e) {

      e.stopPropagation();

      var thisElement = $(e.target);

      if (!$(thisElement).hasClass('menu-item-has-children')) {
          return;
      }

      thisElement.find('> .sub-menu-2 > li').fadeToggle();
      thisElement.find('> .sub-menu-2').slideToggle();
      thisElement.toggleClass('menu-expanded');
    });


    // slider-1
    var bannerSlide = new Swiper(".bannerSlide", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        },
    });

    var bannerSlider2 = new Swiper(".bannerSlider2", {
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        },
    });


  // slide-2
  var categorieOne = new Swiper(".categorieOne", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 4,
      },
    },
  });

  // post slider-1
  var postSlider1 = new Swiper(".postSlider1", {
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },

      768: {
        slidesPerView: 3,
      },

      480: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    },
  });

  // patnerSlider1
  var patnerSlider1 = new Swiper(".patnerSlider1", {
    slidesPerView: 5,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },

      768: {
        slidesPerView: 3,
      },

      480: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    },
  });

  // categoryFive

  var categoryFive = new Swiper(".categoryFive", {
    slidesPerView: 7,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {

      991: {
        slidesPerView: 5,
      },

      480: {
        slidesPerView: 3,
      },

      320: {
        slidesPerView: 2,
      },
    },
  });

	// light box
	if($('.video-play-btn').length) {
    $('.video-play-btn').magnificPopup({
        type: 'iframe',
        removalDelay: 260,
    });
  }

  // AcmeTicker
  if($('.my-news-ticker').length) {
    $('.my-news-ticker').AcmeTicker({
      type:'typewriter',
      direction: 'right',
      speed:50,
      controls: {
          prev: $('.acme-news-ticker-prev'),
          toggle: $('.acme-news-ticker-pause'),
          next: $('.acme-news-ticker-next')
      }
    });
  }
  
  // testimonialOne
  var testimonialOne = new Swiper(".testimonialOne", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var testimonialTwo = new Swiper(".testimonialTwo", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    },
  });

  // recipeSlider
  var recipeSlide = new Swiper(".recipeSlide", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },

      767: {
        slidesPerView: 3,
      },

      575: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    },
  });

  var bannerThree = new Swiper(".bannerThree", {
    speed: 900,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

})(jQuery);