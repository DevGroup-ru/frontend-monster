$(function() {
  "use strict";

  var headerMobileBreakpoint = 1200;

  //helper to change the menu view

  $('.helper-check label:first-child input').attr("checked", true);
  $('.m-container > div[class*="header"]').css('display','none');
  $('.m-container > .header003').css('display','block');
  $('.helper-check input').on('change', function(){
      var menuView = $(this).attr('id');
      $('.helper-check input').removeAttr("checked").prop("checked", false);
      $(this).attr("checked", "checked").prop("checked", true);
      $('.m-container > div[class*="header"]').css('display','none');
      $('[class="'+menuView+'"]').css('display','block');
  });

  if (window.innerWidth < headerMobileBreakpoint) {
    $('.menu').parent().addClass('menu-mobile');
  } else {
    $('.menu').parent().removeClass('menu-mobile');
  }

    //open/close mobile menu

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
    if (window.innerWidth < headerMobileBreakpoint) {
      if ((menuBurger && ! $('.menu-mobile').hasClass('menu-mobile--show')) || menuMobile) { 
        $('.menu-burger').addClass('menu-burger--selected');
        $('body').addClass('body--show-menu'); 
        $('.menu-mobile').addClass('menu-mobile--show');
      } else{
        $('.menu-burger').removeClass('menu-burger--selected');
        $('body').removeClass('body--show-menu'); 
        $('.menu-mobile').removeClass('menu-mobile--show');
        menuBurger = false; 
      };
      menuMobile = false; 
    }
  });

    //open/close header search

  var headerSearchButton = false; 
  var headerSearch = false; 

  $('.header-search-icon').click(function(e){
    if (headerSearchButton) {
      headerSearchButton = false; 
    }
    else{
      headerSearchButton = true; 
    }
    e.preventDefault();
  });

  $('.search').click(function(){
    headerSearch = true;  
  });

  $(document).on('click tap', function (){
    if (window.innerWidth > headerMobileBreakpoint) {
      if ((headerSearchButton && ! $('.header-search-icon').hasClass('header-search-icon--selected')) || headerSearch) {
        $('.header-search-icon').addClass('header-search-icon--selected');
        $('.search').fadeIn();
        $('.search__input').focus(); 
      } else{
        $('.header-search-icon').removeClass('header-search-icon--selected');
        $('.search').fadeOut();
        headerSearchButton = false; 
      };
      headerSearch = false; 
    }
  });

  $('.menu-mobile .menu .sub-link').click(function(){
    if (window.innerWidth < headerMobileBreakpoint) {
      var menuHeight = $(this).parents('.menu').outerHeight();
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
    if (window.innerWidth < headerMobileBreakpoint) {
      $('.menu').parent().addClass('menu-mobile');
      $('.header-search-icon').removeClass('header-search-icon--selected');
      $('.search').fadeIn();
    } else {
      $('.menu').parent().removeClass('menu-mobile');
      $('.menu').removeAttr('style').removeClass('menu-show');
      $('.sub-menu').removeAttr('style').removeClass('sub-menu--show sub-menu--scroll');
      $('.header-search-icon').removeClass('header-search-icon--selected');
      $('.search').fadeOut();
    }

    $('.menu-mobile .menu .sub-link').click(function(){
      if (window.innerWidth < headerMobileBreakpoint) {
        var menuHeight = $(this).parents('.menu').outerHeight();
        $('.sub-menu').removeClass('sub-menu--scroll');
        $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
        $('.menu').css('height',menuHeight);
        return false;
      }
    });
  });
});
