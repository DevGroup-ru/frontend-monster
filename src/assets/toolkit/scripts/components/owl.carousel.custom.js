$(function() {
  "use strict";	
try {
	$('.main-carousel--001').addClass('owl-carousel').owlCarousel({
	  loop:true,
	  margin:10,
	  nav:true,
	  navText: [
	      "",
	      ""
	      ],
	  items: 1
	});

	$('.carousel--full').addClass('owl-carousel').owlCarousel({
	  	loop:true,
  		nav:true,
  		navText: [
	      "",
	      ""
	      ],
	  	items: 1
	});

	$('.carousel--two-items').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
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
	            items:2
	        }
	    }
	});

	$('.carousel--four-items').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
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

	$('.news008__slider').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	margin:0,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
	  	dots:false,
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

	$('.price003__carousel').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
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

	$('.price004__carousel').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
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
	            items:4
	        },
	        1344:{
	            items:4
	        }
	    }
	});

	$('.article001__carousel').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
  		responsive:{
	        320:{
	            items:1
	        },
	        640:{
	            items:1
	        },
	        960:{
	            items:3
	        },
	        1200:{
	            items:3
	        },
	        1344:{
	            items:3
	        }
	    }
	});

	$('.article002__carousel').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
  		responsive:{
	        320:{
	            items:1
	        },
	        640:{
	            items:1
	        },
	        960:{
	            items:3
	        },
	        1200:{
	            items:3
	        },
	        1344:{
	            items:3
	        }
	    }
	});

	$('.article004__carousel').addClass('owl-carousel').owlCarousel({
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
  		responsive:{
	        320:{
	            items:1
	        },
	        640:{
	            items:1
	        },
	        960:{
	            items:1
	        },
	        1200:{
	            items:2
	        },
	        1344:{
	            items:2
	        }
	    }
	});
	
} catch (e) {
}
});