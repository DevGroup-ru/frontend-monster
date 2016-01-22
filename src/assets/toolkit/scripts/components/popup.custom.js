$(function() {
  "use strict";	

	$('select.chosen-select').chosen({inherit_select_classes: true});
  	$('select.icon-select').chosenIcon();
  	$('.chosen-container .chosen-drop').mCustomScrollbar();

  	$(".m-scroll-horiz").mCustomScrollbar({
      	axis:"x",
      	advanced:{autoExpandHorizontalScroll:true}
  	});
});