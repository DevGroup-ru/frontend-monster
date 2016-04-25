$(function() {
	"use strict";

  //horizontal tooltip

  function tooltipPosition (tooltipblocks){
    var tooltip = tooltipblocks,
        tooltipPopup = tooltipblocks.children(".tooltip__popup"),
        tooltipPopupArrow = tooltipPopup.children(".tooltip__arrow"),
        heightTooltipPopup = tooltipPopup.outerHeight(),
        topTooltipPopup = tooltipPopup.offset().top - $(window).scrollTop();

    if (topTooltipPopup < heightTooltipPopup) {
      tooltipPopup.removeClass("tooltip__popup--top").addClass("tooltip__popup--bottom");
      tooltipPopupArrow.removeClass("tooltip__arrow--top").addClass("tooltip__arrow--bottom");
    } else {
      tooltipPopup.removeClass("tooltip__popup--bottom").addClass("tooltip__popup--top");
      tooltipPopupArrow.removeClass("tooltip__arrow--bottom").addClass("tooltip__arrow--top");
    }
  };

  $(".tooltip").each(function(){
    tooltipPosition($(this));
  });

  $(window).scroll(function() {

    $(".tooltip").each(function(){
      tooltipPosition($(this));
    });
    
  });

});
