$(function() {
  "use strict";	
try {
	$(".map001__address-nested-wrap").mCustomScrollbar();

	$(".m-scroll-horiz").mCustomScrollbar({
      	axis:"x",
      	scrollbarPosition:"outside",
      	advanced:{autoExpandHorizontalScroll:true}
  	});

  	$(".m-scroll-horiz").resizable();

} catch (e) {
}
});