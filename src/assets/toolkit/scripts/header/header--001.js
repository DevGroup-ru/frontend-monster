$(function() {
	"use strict";

  $(window).scroll(function(){
    if ( $(this).scrollTop() > 200){
      $('.header001').addClass('header001--fixed');
    } else if($(this).scrollTop() <= 180) {
      $('.header001').removeClass('header001--fixed');
    }
  });

  $('.header001__burger').click(function(){
    $('.header001__menu-1lvl-wrap').toggleClass('header001__menu-1lvl-wrap--show')
    return false;
  });

  $('.header001__phone-button').click(function(){
    $('.header001__phone-call').toggleClass('header001__phone-call--show');
    return false;
  });

  var $thisMenu =  $('.header001__menu-1lvl');

  function Menu001Tablet() {
    if (document.documentElement.clientWidth < 960) {
    	$('.header001__menu-1lvl-sub-link').click(function(){
	    	$(this).next('.header001__menu-2lvl').addClass('header001__menu-2lvl--show');
		    return false;
    	});
    }
  }

  function Menu001BackButton() {
    if (document.documentElement.clientWidth < 960) {
    	$('.header001__menu-2lvl-item-back a').click(function(){
    		$(this).closest('.header001__menu-2lvl').removeClass('header001__menu-2lvl--show');
  	    return false;
  	 });
    }
  }

  function Menu001Clear() {
    $('.header001__menu-2lvl').removeClass('header001__menu-2lvl--show');
  }
  
  function Menu001Desctop() {
    if (document.documentElement.clientWidth > 960) {
      Menu001Clear();
      $('.header001__menu-1lvl-sub-link').click(function(){
        Menu001Clear();
      });
    }
  } 

  Menu001Tablet();
  Menu001BackButton();
  Menu001Desctop();

  $(window).resize(function(){
    Menu001Tablet();
    Menu001Desctop();
  });

});
