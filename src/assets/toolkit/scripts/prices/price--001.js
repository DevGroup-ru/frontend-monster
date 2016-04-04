$(function() {
	"use strict";

	var priceHeadCalc = function(){
	    var priceHeadHeight = $(".price001__values-head").eq(0).outerHeight(); 

	    $(".price001__values-head").each(function(){
	       	if ($(this).outerHeight() > priceHeadHeight) {
	        	priceHeadHeight = $(this).outerHeight();
	        }
	    });

	    $(".price001__values-head").css("height", priceHeadHeight + "px");
	    $(".price001__options").css("margin-top", priceHeadHeight + "px");
	};	

	priceHeadCalc();

	var priceTableDesktop = function(){
	    var priceTableI = 0;

	    $(".price001__options-nested").each(function(){
	        priceTableI ++;

	        var priceOptions = $(this).outerHeight();
	        $(".price001__values-content-line:nth-child("+priceTableI+")").css("height", priceOptions + "px");
	    });
	};

	var priceTableMobile = function(){
		var priceTableI = 0;
		var priceTableI1 = 1;

		$(".price001__options-nested").each(function(){
	        priceTableI ++;
	        priceTableI1 ++;

	        var priceOptions = $(this).outerHeight();
	        $(".price001__values-content-line:nth-child("+priceTableI+")").css({"margin-top": priceOptions + "px", "height": priceOptions + "px"});
	        $(".price001__options-nested:nth-child("+priceTableI1+")").css("margin-top", priceOptions + "px");
	    });
	};

	if (window.innerWidth < 1200) {
	    priceTableMobile();
	} else {
	    priceTableDesktop();
	}

	$(window).resize(function() {
		if (window.innerWidth < 1200) {
		    priceTableMobile();
		} else {
			$(".price001__values-content-line").removeAttr("style");
	        $(".price001__options-nested").removeAttr("style");
		    priceTableDesktop();
		}
	});

});
