$(function() {
	"use strict";

	function priceHeightCalc(priceblocks) {

	    var priceHeight = priceblocks.eq(0).outerHeight(); 

	    priceblocks.each(function(){
	       	if ($(this).outerHeight() > priceHeight) {
	        	priceHeight = $(this).outerHeight();
	        }
	    });

	    priceblocks.css("height", priceHeight + "px");
	}

	$(".price").each(function(){
       	priceHeightCalc($(this).find(".price-height"));
    });

	$(window).resize(function() {
		$(".price-height").removeAttr("style");
		$(".price").each(function(){
	       	priceHeightCalc($(this).find(".price-height"));
	    });
	});

	$('.price003__carousel').owlCarousel({
	  	loop:true,
	  	nav:false,
  		responsive:{
	        320:{
	            items:1
	        },
	        640:{
	            items:2
	        },
	        960:{
	            items:2
	        },
	        1200:{
	            items:4
	        },
	        1344:{
	            items:4
	        }
	    }
	});

	$('.price004__carousel').owlCarousel({
	  	loop:true,
	  	nav:false,
  		responsive:{
	        320:{
	            items:1
	        },
	        640:{
	            items:1
	        },
	        960:{
	            items:2
	        },
	        1200:{
	            items:4
	        },
	        1344:{
	            items:4
	        }
	    }
	});

});
