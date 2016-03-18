$(function() {
	"use strict";

  var textShow = "Добавить комментарий";
  var textHide = "Свернуть комментарий";

  $('.form-link-hide-line').click(function(){
    if (!$(this).hasClass('form-link-hide-line--active')) {
      $(this).addClass('form-link-hide-line--active').text(textHide);
      $(this).parents().next('.form-hide-line').fadeIn();
    } else {
      $(this).removeClass('form-link-hide-line--active').text(textShow);
      $(this).parents().next('.form-hide-line').fadeOut();
    }
    return false;
  });
});
