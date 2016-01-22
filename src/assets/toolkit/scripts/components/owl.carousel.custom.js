$(function() {
  "use strict";	

	$('.main-carousel--001').owlCarousel({
	  loop:true,
	  margin:10,
	  nav:true,
	  items: 1
	});

	$('.carousel--full').owlCarousel({
	  	loop:true,
  		nav:true,
  		navText: [
	      "<i class='demo-icon icon-basic-arrow-left'></i>",
	      "<i class='demo-icon icon-basic-arrow-right'></i>"
	      ],
	  	items: 1
	});

	$('.carousel--two-items').owlCarousel({
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
	            items:2
	        },
	        1344:{
	            items:2
	        }
	    }
	});

	$('.carousel--four-items').owlCarousel({
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
	            items:4
	        },
	        1200:{
	            items:4
	        },
	        1344:{
	            items:4
	        }
	    }
	});

	$('.news008__slider').owlCarousel({
	  	loop:true,
	  	margin:0,
	  	nav:true,
	  	dots:false,
	    navText: [
	      "<i class='demo-icon icon-basic-arrow-left'></i>",
	      "<i class='demo-icon icon-basic-arrow-right'></i>"
	      ],
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
	            items:2
	        },
	        1344:{
	            items:3
	        }
	    }
	});
});