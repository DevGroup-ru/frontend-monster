$(function() {
  "use strict";	
try {

	var sl001Time = 7,
		$sl001ProgressBar,
	    $sl001Bar, 
	    $sl001Elem, 
	    sl001IsPause, 
	    sl001Tick,
	    sl001PercentTime;

	$('.slider001__carousel').addClass('owl-carousel').owlCarousel({
	  	items:1,
	  	loop:true,
	  	nav:true,
		navText: [
		    "",
		    ""
		],
		navContainer: '.slider001__carousel-nav .m-row',
		dotsContainer: '.slider001__carousel-dot .m-row'
	});

	function buildProgressBar() {
	    $sl001ProgressBar = $("<div>",{
	        class:"slider001__progress-bar"
	    });
	    
	    $sl001Bar = $("<div>",{
	        class:"slider001__bar"
	    });
	    
	    $sl001ProgressBar.append($sl001Bar).prependTo($sl001Elem);
	}

	function start() {
	    sl001PercentTime = 0;
	    sl001IsPause = false;
	    sl001Tick = setInterval(interval, 10);
	};

	function interval(event) {
	    if(sl001IsPause === false){
	        sl001PercentTime += 1 / sl001Time;
	        
	       	$sl001Bar.css({
	            width: sl001PercentTime+"%"
	        });
	        
	        if(sl001PercentTime >= 100){
	            $('.slider001__carousel').trigger("next.owl.carousel"); 
	            sl001PercentTime = 0;
	        }
	    }
	}

	function pauseOnDragging(){
	    sl001IsPause = true;
	}

	function moved(){
	    clearTimeout(sl001Tick);
	    sl002PercentTime = 0;
	    start();
	}

	$('.slider001__carousel').hover( 
      function() {            
        $(this).trigger('stop.owl.autoplay');
        sl001IsPause = true;
      },
      function(){
        $(this).trigger('play.owl.autoplay');
        sl001IsPause = false;
      }
    );

	
} catch (e) {
}
});