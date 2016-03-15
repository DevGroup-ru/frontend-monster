$(function() {
	"use strict";

  if (window.innerWidth < 960) {
    $('.footer006').addClass('footer006--mobile');
  } else {
    $('.footer006').removeClass('footer006--mobile');
  }

  $('.footer006--mobile .footer006__menu-1lvl-item--sub').click(function(){
    if (window.innerWidth < 960) {
      if(!$(this).hasClass('footer006__menu-1lvl-item--active')){
        $('.footer006__menu-1lvl-item--sub').removeClass('footer006__menu-1lvl-item--active');
        $('.footer006__menu-2lvl').css('display','none');
        $(this).children('.footer006__menu-2lvl').fadeIn();
        $(this).addClass('footer006__menu-1lvl-item--active');
      } else {
        $(this).removeClass('footer006__menu-1lvl-item--active');
        $(this).children('.footer006__menu-2lvl').fadeOut();
      }
      return false;
    }
  });

  $(window).resize(function() {

    if (window.innerWidth < 960) {
      $('.footer006').addClass('footer006--mobile');
      $('.footer006__menu-2lvl').css('display','none');
    } else {
      $('.footer006').removeClass('footer006--mobile');
      $('.footer006__menu-2lvl').css('display','block');
      $('.footer006__menu-1lvl-item--sub').removeClass('footer006__menu-1lvl-item--active');
    }
  });
});
