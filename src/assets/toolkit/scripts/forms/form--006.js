$(function() {
	"use strict";


  $('.form006__button--step-next').click(function(){
    var stepParent = $(this).parents(".form006");
    stepParent.find('.form006__step').removeClass('form006__step--active').css('display', 'none');
    $(this).parents('.form006__step').next().addClass('form006__step--active').fadeIn('350');
    var currentStep = parseInt($('.form006__step--active').attr('data-index'));
    stepParent.find('.form006__nav-step').removeClass('form006__nav-step--active');
    var $nextForm = stepParent.find('.form006__nav-step[data-index="'+currentStep+'"]');
    $nextForm.addClass('form006__nav-step--active');
    return false;
  });

  $('.form006__nav-step').click(function(){
    var stepParent = $(this).parents(".form006");
    stepParent.find('.form006__step').removeClass('form006__step--active').css('display', 'none');
    stepParent.find('.form006__nav-step').removeClass('form006__nav-step--active');
    var currentStep = parseInt($(this).attr('data-index'));
    var $nextStep = stepParent.find('.form006__nav-step[data-index="'+currentStep+'"]');
    $nextStep.addClass('form006__nav-step--active');
    var $nextForm = stepParent.find('.form006__step[data-index="'+currentStep+'"]');
    $nextForm.addClass('form006__step--active').fadeIn('350');
    return false;
  });
});
