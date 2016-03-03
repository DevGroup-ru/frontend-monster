$(function() {
  "use strict";
  var leftMenuMobileBreakpoint = 1200;

  if (window.innerWidth < leftMenuMobileBreakpoint) {
    $('.left-menu').addClass('left-menu-mobile');
  } else {
    $('.left-menu').removeClass('left-menu-mobile');
  }

  var leftMenuBurgerCl = false; 
  var leftMenuMobileCl = false; 
  var thisLeftBtn;

  $('.left-menu-btn').click(function(e){
    thisLeftBtn = $(this);
    if (leftMenuBurgerCl) {
      leftMenuBurgerCl = false; 
    }
    else{
      leftMenuBurgerCl = true; 
    }
    e.preventDefault();
  });

  $('.left-menu-mobile').click(function(){
    leftMenuMobileCl = true;  
  });

  $(document).on('click tap', function (){
    if (window.innerWidth < leftMenuMobileBreakpoint) {
      if ((leftMenuBurgerCl && ! $('.left-menu-mobile').hasClass('left-menu-mobile--show')) || leftMenuMobileCl) { 
        thisLeftBtn.addClass('left-menu-btn--selected');
        $('body').addClass('body--show-menu'); 
        thisLeftBtn.parent().find('.left-menu-mobile').addClass('left-menu-mobile--show-one')
        .delay(100)
        .queue( function(next){ 
          $(this).addClass('left-menu-mobile--show');
          next(); 
        });
      } else{
        $('.left-menu-btn').removeClass('left-menu-btn--selected');
        $('body').removeClass('body--show-menu'); 
        $('.left-menu-mobile').removeClass('left-menu-mobile--show').removeClass('left-menu-mobile--show-one');
        leftMenuBurgerCl = false; 
      };
      leftMenuMobileCl = false; 
    }
  });

  //to next menu level

  $('.left-menu-mobile .sub-link').click(function(){
    if (window.innerWidth < leftMenuMobileBreakpoint) {
      var menuHeight = $(this).parents('.left-menu-mobile').outerHeight();
      $('.sub-menu').removeClass('sub-menu--scroll');
      $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
      $('.left-menu-mobile').css('height',menuHeight);
      return false;
    }
  }); 

  //back to previous menu level

  $('.menu-item-back').click(function(){
    $(this).closest('.sub-item').closest('.sub-menu').addClass('sub-menu--scroll');
    $(this).closest('.sub-menu').removeClass('sub-menu--show sub-menu--scroll');
    return false;
  });


  $(window).resize(function() {

    if (window.innerWidth < leftMenuMobileBreakpoint) {
      $('.left-menu').addClass('left-menu-mobile');
    } else {
      $('.left-menu').removeClass('left-menu-mobile');
      $('.left-menu').removeAttr('style').removeClass('menu-show');
    }

    $('.left-menu-mobile .sub-link').click(function(){
      if (window.innerWidth < leftMenuMobileBreakpoint) {
        var menuHeight = $(this).parents('.left-menu-mobile').outerHeight();
        $('.sub-menu').removeClass('sub-menu--scroll');
        $(this).next('.sub-menu').css('height',menuHeight).addClass('sub-menu--show sub-menu--scroll');
        $('.left-menu-mobile').css('height',menuHeight);
        return false;
      }
    });
  });
});
