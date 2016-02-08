$(function() {
  "use strict";

  $(window).scroll(function(){
    if ( $(this).scrollTop() > 200){
      $('.header001').addClass('header001--fixed');
    } else if($(this).scrollTop() <= 180) {
      $('.header001').removeClass('header001--fixed');
    }
  });

});
