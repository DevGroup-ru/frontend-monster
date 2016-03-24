$(function() {
  "use strict";

  	$(".tabs__content").hide();
  	$(".tabs__content.active").show();

    $(".tabs__header").click(function() {
      	$(".tabs__content").hide();
      	var activeTab = $(this).attr("rel"); 
      	$(".tabs__content[rel^='"+activeTab+"']").fadeIn();		
      	$(".tabs__header").removeClass("active");
      	$(this).addClass("active");  
    });

});
