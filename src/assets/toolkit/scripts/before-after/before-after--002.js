$(function() {
	"use strict";

  $('.before-after002__button-show-after').click(function () {
    $(this).parents(".before-after002__nested").find(".before-after002__nested-right").addClass("before-after002__nested-right--show");
    return false;
  });

  $('.before-after002__button-show-before').click(function () {
    $(this).parents(".before-after002__nested").find(".before-after002__nested-right").removeClass("before-after002__nested-right--show");
    return false;
  });

});
