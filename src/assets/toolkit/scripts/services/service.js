$(function() {
	"use strict";

  $('.service__show-more-btn').click(function(){
    if ($(this).hasClass('active')) {
      $(this).parent().prev('.service__wrap--hidden').fadeOut();
      $(this).text('Показать все').removeClass('active');
    } else {
      $(this).parent().prev('.service__wrap--hidden').fadeIn();
      $(this).text('Свернуть').addClass('active');
    }
    return false;
  });
});
