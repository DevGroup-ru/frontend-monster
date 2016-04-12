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

});
