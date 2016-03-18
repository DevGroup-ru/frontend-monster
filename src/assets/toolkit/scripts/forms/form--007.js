$(function() {
	"use strict";

  $('.form007__full-form-open').click(function(){
    $(this).addClass('form007__full-form-open--hide');
    $(this).parents('.form007').addClass('form007--show-full-form');
    return false;
  });

  $('.form007__close').click(function(){
    $(this).removeClass('form007__full-form-open--hide');
    $(this).parents('.form007').removeClass('form007--show-full-form');
    return false;
  });
});
