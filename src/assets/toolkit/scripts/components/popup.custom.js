$(function() {
  	"use strict";
  	$.fn.extend({
  		destroyPopup: function($popupOpenElement) {
  			var $el = $(this);
            var popupBackground = $('#' + $el.attr('id') + '_background');            
            var $wrapper = $('#' + $el.attr('id') + '_wrapper');

            // remove background
            if (popupBackground) {
                popupBackground.remove();
            }

            // remove click listener
            if ($popupOpenElement) {
                $(document).off('click', $popupOpenElement);
            }

            // remove wrapper
            $wrapper.remove();

            // remove initialization marker to allow popup to be initialize again
            $el.data('popup-initialized', false);
  		}
  		/// $("#my_popup").destroyPopup();
  	});

  	$('.popup-button').click(function(){
	    var dataBModal = $(this).attr('data-button');
	    $(this).addClass(dataBModal + "_open");
	    var $item = $('[data-modal="'+dataBModal+'"]');
	    $item.find(".close-modal").addClass(dataBModal + "_close");  
	    if ($item.hasClass("popup-alone")) {
	    	$item.attr('id', dataBModal).popup({
			  	transition: 'all 0.3s 0s',
			  	beforeopen: function() {
				   $(".popup_wrapper").addClass("m-wrapper popup-alone-wrap");
				}
			});	
		} else {
	        $item.attr('id', dataBModal).popup({
			  	transition: 'all 0.3s 0s',
			  	beforeopen: function() {
				   $(".popup_wrapper").addClass("m-wrapper");
				}
			});		
		}
	});	

	$('.form-popup-button').click(function(){
	    var dataBModal = $(this).attr('data-button');
	    $(this).addClass(dataBModal + "_open");
	    var $item = $('[data-modal="'+dataBModal+'"]');
	    $item.find(".close-modal").addClass(dataBModal + "_close");  
	    if ($item.hasClass("popup-alone")) {
	        $item.attr('id', dataBModal).popup({
	        	transition: 'all 0.3s',
	        	beforeopen: function() {
				   $(".popup_wrapper").addClass("m-wrapper popup-alone-wrap");
				},
				closetransitionend: function() {
				   $("." + dataBModal + "_open").after($item);
				   $item.removeAttr('style');
				   $item.attr('id', dataBModal).destroyPopup();
				}
			});
		} else {
			$item.attr('id', dataBModal).popup({
	        	transition: 'all 0.3s',
	        	beforeopen: function() {
				   $(".popup_wrapper").addClass("m-wrapper");
				},
				closetransitionend: function() {
				   $("." + dataBModal + "_open").after($item);
				   $item.removeAttr('style');
				   $item.attr('id', dataBModal).destroyPopup();
				}
			});
		}
	});

});