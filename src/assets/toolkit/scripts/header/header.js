$(function() {
  "use strict";

  var headerMobileBreakpoint = 1200;

  //helper to change the menu view

  $('.m-container > div[class*="header"]').css('display','none');
  $('.m-container > .header002').css('display','block');
  $('.helper-check input').on('change', function(){
      var menuView = $(this).attr('id');
      $('.helper-check input').removeAttr("checked").prop("checked", false);
      $(this).attr("checked", "checked").prop("checked", true);
      $('.m-container > div[class*="header"]').css('display','none');
      $('[class="'+menuView+'"]').css('display','block');
  });

  //for tabs-menu

  if ($('.sub-menu').hasClass('sub-menu--tabs')) {
    $('.sub-menu--tabs .sub-item').hover(
        function() {
          $(this).closest('.sub-menu--tabs').find('.sub-item').removeClass('sub-item--show');
          $(this).addClass('sub-item--show');
        }
    );
  }

  //actions in header

  if (window.innerWidth > headerMobileBreakpoint) {
    $('.sub-action').hover(
      function() {       
        $('.actions').addClass('actions--show');
        $('.sub-action').addClass('hover');
      },
      function(){
        $('.actions').removeClass('actions--show');
        $('.sub-action').removeClass('hover');
      }
    );

    $('.actions').hover( 
      function() {            
        $('.sub-action').mouseenter();
      },
      function(){
        $('.sub-action').mouseleave();
      }
    );
  }

  if (window.innerWidth < headerMobileBreakpoint) {
    $('.menu').parent().addClass('menu-mobile');
  } else {
    $('.menu').parent().removeClass('menu-mobile');
  }

  //open/close mobile menu

  var menuBurgerCl = false; 
  var menuMobileCl = false; 

  $('.menu-burger').click(function(e){
    if (menuBurgerCl) {
      menuBurgerCl = false; 
    }
    else{
      menuBurgerCl = true; 
    }
    e.preventDefault();
  });

  $('.menu-mobile').click(function(){
    menuMobileCl = true;  
  });

  $(document).on('click tap', function (){
    if (window.innerWidth < headerMobileBreakpoint) {
      if ((menuBurgerCl && ! $('.menu-mobile').hasClass('menu-mobile--show')) || menuMobileCl) { 
        $('.menu-burger').addClass('menu-burger--selected');
        $('body').addClass('body--show-menu'); 
        $('.menu-mobile').addClass('menu-mobile--show-one')
        .delay(100)
        .queue( function(next){ 
          $(this).addClass('menu-mobile--show');
          next(); 
        });
        $('.header-phone-button-wrap').removeClass('header-phone-button-wrap--show');
      } else{
        $('.menu-burger').removeClass('menu-burger--selected');
        $('body').removeClass('body--show-menu'); 
        $('.menu-mobile').removeClass('menu-mobile--show').removeClass('menu-mobile--show-one');
        menuBurgerCl = false; 
      };
      menuMobileCl = false; 
    }
  });


  //open/close block with phone and button 

  $('.header-phone-button-icon').click(function(){
    if ($('.menu-burger').hasClass('menu-burger--selected')) {
      $('body').click();
    };
    $('.header-phone-button-wrap').toggleClass('header-phone-button-wrap--show');
    return false;
  });

  //open/close header search

  var headerSearchBtnCl = false; 
  var headerSearchCl = false; 

  $('.header-search-icon').click(function(e){
    if (headerSearchBtnCl) {
      headerSearchBtnCl = false; 
    }
    else{
      headerSearchBtnCl = true; 
    }
    e.preventDefault();
  });

  $('.search').click(function(){
    headerSearchCl = true;  
  });

  $(document).on('click tap', function (){
    if (window.innerWidth > headerMobileBreakpoint) {
      if ((headerSearchBtnCl && ! $('.header-search-icon').hasClass('header-search-icon--selected')) || headerSearchCl) {
        $('.header-search-icon').addClass('header-search-icon--selected');
        $('.search').fadeIn();
        $('.search__input').focus(); 
      } else {
        $('.header-search-icon').removeClass('header-search-icon--selected');
        $('.search').fadeOut();
        headerSearchBtnCl = false; 
      };
      headerSearchCl = false; 
    }
  });

  //to next menu level

  $('.menu-mobile .menu .sub-link').click(function(){
    if (window.innerWidth < headerMobileBreakpoint) {
      var menuHeight = $(this).parents('.menu').outerHeight();
      $('.sub-menu').removeClass('sub-menu--scroll');
      $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
      $('.menu').css('height',menuHeight);
      return false;
    }
  }); 

  //back to previous menu level

  $('.menu-item-back').click(function(){
    $(this).closest('.sub-item').closest('.sub-menu').addClass('sub-menu--scroll');
    $(this).closest('.sub-menu').removeClass('sub-menu--show sub-menu--scroll');
    return false;
  });

  //for beautiful scroll
  if (window.innerWidth > headerMobileBreakpoint) {
    $('.sub-menu--custom-scroll').mCustomScrollbar();
  }


  $(window).resize(function() {

    if (window.innerWidth < headerMobileBreakpoint) {
      $('.menu').parent().addClass('menu-mobile');
      $('.header-search-icon').removeClass('header-search-icon--selected');
      $('.search').fadeIn();
      $('.sub-action').hover( function() {       
        $('.actions').removeClass('actions--show');
        $('.sub-action').removeClass('hover');
      });
      $('body').click();
    } else {
      $('.menu').parent().removeClass('menu-mobile');
      //$('.menu-burger').removeClass('menu-burger--selected');
      $('.menu').removeAttr('style').removeClass('menu-show');
      $('.sub-menu').removeAttr('style').removeClass('sub-menu--show sub-menu--scroll');
      $('.header-search-icon').removeClass('header-search-icon--selected');
      $('.search').fadeOut();
      $('.sub-action').hover(
        function() {       
          $('.actions').addClass('actions--show');
          $('.sub-action').addClass('hover');
        },
        function(){
          $('.actions').removeClass('actions--show');
          $('.sub-action').removeClass('hover');
        }
      );
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
