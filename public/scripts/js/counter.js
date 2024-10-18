;(function ($) { 
  "use strict";

  let counter = $('.count')

  $(document).ready(function () {
    if (counter.length) {
        counter.counterUp({
            delay: 10,
            time: 1000
        });
    }
});


  new WOW().init();

})(jQuery);