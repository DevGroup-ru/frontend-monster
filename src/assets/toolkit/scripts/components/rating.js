$(function() {
  "use strict";

  var ratingNoselest = $('.rating--noselect');

  if( $('.rating').hasClass('rating--noselect')){
    ratingNoselest.each(function(){
      ratingNoselest.children('input').attr('disabled', true);
    });
  }
});
