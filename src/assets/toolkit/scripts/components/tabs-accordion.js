$(function() {
  "use strict";

  $(".accordion-tabs__header").click(function(){
  	$(this).not($(this).parents('.accordion-tabs__wrap')).parent().siblings().children().removeClass("active");
    $(this).next(".accordion-tabs__content").andSelf().addClass("active");
    return false;
  });

});
