$(function() {
	"use strict";

  var ratingNoselest = $('.rating-css--noselect');

	if( $('.rating-css').hasClass('rating-css--noselect')){
	    ratingNoselest.each(function(){
	      	ratingNoselest.children('input').attr('disabled', true);
	    });
	}

	var addClassesRating = function(element, addClasses, removeClasses ) {
	    $(element).siblings().andSelf().removeClass(removeClasses);
	    $(element).addClass(addClasses).prevAll().addClass(addClasses)
	}
	   
    var selected = null; 
    $(".rating-js .rating-js__item").mouseover(function() {
      addClassesRating(this, "rating-js__item--hover", "rating-js__item--hover rating-js__item--chosen");
    }); 
     
    $(".rating-js").mouseleave(function() {
       $(this).children().removeClass("rating-js__item--hover")
       addClassesRating(selected, "rating-js__item--chosen", "rating-js__item--hover");
    }); 
   
    $(".rating-js .rating-js__item").click(function() {
       addClassesRating(this, "rating-js__item--chosen", "rating-js__item--chosen rating-js__item--hover")
       selected = this;
    })
});
