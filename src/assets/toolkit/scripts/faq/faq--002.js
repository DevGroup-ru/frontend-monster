$(function() {
	"use strict";

  var textShow = "Читать подробнее";
  var textHide = "Свернуть";

  $('.faq__link-show').click(function(){
    if (!$(this).hasClass('faq__link-show--active')) {
      $(this).addClass('faq__link-show--active').text(textHide);
      $(this).prev('.faq__text-hide').fadeIn();
    } else {
      $(this).removeClass('faq__link-show--active').text(textShow);
      $(this).prev('.faq__text-hide').fadeOut();
    }
    return false;
  });
});
