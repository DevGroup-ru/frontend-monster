$(function() {
  	"use strict";

  	$('.popup-button').click(function(){
	    var dataBModal = $(this).attr('data-button');
	    $(this).addClass(dataBModal + "_open");
	    var $item = $('[data-modal="'+dataBModal+'"]');
	    $item.children(".close-modal").addClass(dataBModal + "_close");  
	    if ($item.hasClass("popup-alone")) {
	    	$item.attr('id', dataBModal).popup({
			  	transition: 'all 0.3s 0s',
			  	beforeopen: function() {
				   $(".popup_wrapper").addClass("popup-alone-wrap");
				}
			});	
		} else {
	        $item.attr('id', dataBModal).popup({
			  	transition: 'all 0.3s 0s'
			});		
		}
	});	

	$('.form-popup-button').click(function(){
	    var dataBModal = $(this).attr('data-button');
	    $(this).addClass(dataBModal + "_open");
	    var $item = $('[data-modal="'+dataBModal+'"]');
	    $item.children(".close-modal").addClass(dataBModal + "_close");  
	    if ($item.hasClass("popup-alone")) {
	        $item.attr('id', dataBModal).popup({
	        	transition: 'all 0.3s',
	        	beforeopen: function() {
				   $(".popup_wrapper").addClass("popup-alone-wrap");
				},
				closetransitionend: function() {
				   $("." + dataBModal + "_open").after($item);
				   $item.removeAttr('style');
				   $item.attr('id', dataBModal).popup('destroy');
				}
			});
		} else {
			$item.attr('id', dataBModal).popup({
	        	transition: 'all 0.3s',
				closetransitionend: function() {
				   $("." + dataBModal + "_open").after($item);
				   $item.removeAttr('style');
				   $item.attr('id', dataBModal).popup('destroy');
				}
			});
		}
	});

});