$(function() {
  "use strict";

  	$(window).scroll(function(){
	    if ( $(this).scrollTop() > 200){
	      $('.header000').addClass('header000--fixed');
	    } else if($(this).scrollTop() <= 180) {
	      $('.header000').removeClass('header000--fixed');
	    };
	});

    $('.header000__phone-button').click(function(){
      if ($('.menu-burger').hasClass('menu-burger--selected')) {$('.menu-burger').click();};
      if ($(".header000__phone-block").hasClass('header000__phone-block--show')) {
        $('.header000__phone-block').removeClass('header000__phone-block--show');
      }
      else{
        $('.header000__phone-block').addClass('header000__phone-block--show');
      };

      
      return false;
  	});

  	$(document).click(function(){
		$('.header000__phone-block').removeClass('header000__phone-block--show');
  	});

});

  // $('.header000__phone-button').click(function(){
  //   	header000__phone-button = true;
  // 	});

  // 	$(document).click(function(){
  //     if (header000__phone-button){

  //     	if(!$('.header000__phone-block').hasClass('show')) {
	 //      	alert('1');
	 //        $('.header000__phone-block').addClass('header000__phone-block--show');
	 //    }
	 //    else{
	 //        $('.header000__phone-block').removeClass('header000__phone-block--show');
	 //    };
	 //    return false;
  //     };
  // 	});