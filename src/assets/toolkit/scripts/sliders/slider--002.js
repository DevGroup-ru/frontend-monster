$(function() {
  "use strict";	
try {

	var sl002Time = 7,
		$sl002ProgressBar,
	    $sl002Bar, 
	    $sl002Elem, 
	    sl002IsPause, 
	    sl002Tick,
	    sl002PercentTime;

	$('.slider002__carousel').addClass('owl-carousel').owlCarousel({
	    loop: true,
	    nav: true,
	    items: 1,
	    onInitialized: function progressBar(event) {   
			$sl002Elem = event.target;

		    buildProgressBar();
		    start();
		},
	    onTranslated: moved,
	    onDrag: pauseOnDragging,
		navText: [
		    "",
		    ""
		],
		navContainer: '.slider002__carousel-nav .m-row',
		dotsContainer: '.slider002__carousel-dot .m-row'	
	});


	function buildProgressBar() {
	    $sl002ProgressBar = $("<div>",{
	        class:"slider002__progress-bar"
	    });
	    
	    $sl002Bar = $("<div>",{
	        class:"slider002__bar"
	    });
	    
	    $sl002ProgressBar.append($sl002Bar).prependTo($sl002Elem);
	}

	function start() {
	    sl002PercentTime = 0;
	    sl002IsPause = false;
	    sl002Tick = setInterval(interval, 10);
	};

	function interval() {
	    if(sl002IsPause === false){
	        sl002PercentTime += 1 / sl002Time;
	        
	       	$sl002Bar.css({
	            width: sl002PercentTime+"%"
	        });
	        
	        if(sl002PercentTime >= 100){
	            $('.slider002__carousel').trigger("next.owl.carousel"); 
	            sl002PercentTime = 0;
	        }
	    }
	}

	function pauseOnDragging(){
	    sl002IsPause = true;
	}

	function moved(){
	    clearTimeout(sl002Tick);
	    sl002PercentTime = 0;
	    start();
	}

	$('.slider002__carousel').hover( 
      function() {            
        $(this).trigger('stop.owl.autoplay');
        sl002IsPause = true;
      },
      function(){
        $(this).trigger('play.owl.autoplay');
        sl002IsPause = false;
      }
    );
	
} catch (e) {
}
});