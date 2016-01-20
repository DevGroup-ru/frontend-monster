$(function() {
  "use strict";

  $(".accordion-tabs .accordion-tabs__header").click(function(){
    $(this).siblings().removeClass("active").end().next(".accordion-tabs__content").andSelf().addClass("active");
    return false;
  });
});
