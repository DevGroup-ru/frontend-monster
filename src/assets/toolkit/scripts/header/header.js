$(function() {
	"use strict";

  var menuBurger = false; 
  var menuMobile = false; 

  $('.menu-burger').click(function(e){
    if (menuBurger) {
      menuBurger = false; 
    }
    else{
      menuBurger = true; 
    }
    e.preventDefault();
  });

  $('.menu-mobile').click(function(){
    menuMobile = true;  
  });

  $(document).on('click tap', function (){
    if ($(window).width() < 1200) {
      if ((menuBurger && ! $('.menu-mobile').hasClass('menu--show')) || menuMobile) { 
        $('.menu-burger').addClass('selected');
        $('body').addClass('body--show-menu'); 
        $('.menu-mobile').addClass('menu--show');
      } else{
        $('.menu-burger').removeClass('selected');
        $('body').removeClass('body--show-menu'); 
        $('.menu-mobile').removeClass('menu--show');
        menuBurger = false; 
      };
      menuMobile = false; 
    }
  });

  if ($(window).width() < 1200) {
    $('.menu').addClass('menu-mobile');
  } else {
    $('.menu').removeClass('menu-mobile');
  }

  $('.menu-mobile .sub-link').click(function(){
    if ($(window).width() < 1200) {
      var menuHeight = $(this).parents('.menu-mobile').outerHeight();
      $('.sub-menu').removeClass('sub-menu--scroll');
      $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
      $('.menu').css('height',menuHeight);
      return false;
    }
  }); 

  $('.menu-item-back').click(function(){
    $('.sub-menu').addClass('sub-menu--scroll');
    $(this).closest('.sub-menu').removeClass('sub-menu--show sub-menu--scroll');
    return false;
 });  

  $(window).resize(function() {
    if ($(window).width() < 1200) {
      $('.menu').addClass('menu-mobile');
    } else {
      $('.menu').removeAttr('style').removeClass('menu-mobile menu--show');
      $('.sub-menu').removeAttr('style').removeClass('sub-menu--show sub-menu--scroll');
    }

    $('.menu-mobile .sub-link').click(function(){
      if ($(window).width() < 1200) {
        var menuHeight = $(this).parents('.menu-mobile').outerHeight();
        $('.sub-menu').removeClass('sub-menu--scroll');
        $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
        $('.menu').css('height',menuHeight);
        return false;
      }
    });
  });
});
