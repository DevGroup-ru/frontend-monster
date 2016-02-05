$(function() {
  "use strict";

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
    if (window.innerWidth < 1200) {
      if ((menuBurger && ! $('.menu-mobile').hasClass('menu-mobile--show')) || menuMobile) { 
        $('.menu-burger').addClass('selected');
        $('body').addClass('body--show-menu'); 
        $('.menu-mobile').addClass('menu-mobile--show');
      } else{
        $('.menu-burger').removeClass('selected');
        $('body').removeClass('body--show-menu'); 
        $('.menu-mobile').removeClass('menu-mobile--show');
        menuBurger = false; 
      };
      menuMobile = false; 
    }
  });


  if (window.innerWidth < 1200) {
    $('.menu').parent().addClass('menu-mobile');
  } else {
    $('.menu').parent().removeClass('menu-mobile');
  }

  $('.menu-mobile .menu .sub-link').click(function(){
    if (window.innerWidth < 1200) {
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
    if (window.innerWidth < 1200) {
      $('.menu').parent().addClass('menu-mobile');
    } else {
      $('.menu').parent().removeClass('menu-mobile');
      $('.menu').removeAttr('style').removeClass('menu-show');
      $('.sub-menu').removeAttr('style').removeClass('sub-menu--show sub-menu--scroll');
    }

    $('.menu-mobile .menu .sub-link').click(function(){
      if (window.innerWidth < 1200) {
        var menuHeight = $(this).parents('.menu').outerHeight();
        $('.sub-menu').removeClass('sub-menu--scroll');
        $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
        $('.menu').css('height',menuHeight);
        return false;
      }
    });
  });
});
