$(function() {
	"use strict";

  $('.form007__full-form-open').click(function(){
    $(this).addClass('form007__full-form-open--hide');
    $(this).parents('.form007').addClass('form007--show-full-form');
    return false;
  });

  $('.form007__close').click(function(){
    $(this).parents('.form007').find('.form007__full-form-open').removeClass('form007__full-form-open--hide');
    $(this).parents('.form007').removeClass('form007--show-full-form');
    return false;
  });
});
