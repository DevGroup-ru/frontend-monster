$(function() {
	"use strict";

  	var $dragMe = $(".before-after003__dragme"),
       	$container = $(".before-after003__nested-left"),
        $viewAfter = $(".before-after003__img-wrap--before"),
        $viewImg = $(".before-after003__img img");

    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width: $(this).css('left')
            });
            $dragMe.css ({
                top: 0
            })
        }
    });

    var dragMeStart = $container.width() / 2;
    positionStart(dragMeStart);

	var widthContainer = $container.width();
	var widthImg = $viewImg.width();
	var imgWidthCenter = (widthImg - widthContainer) / 2;
	var heightContainer = $container.height();
	var heightImg = $viewImg.height();
	var imgHeightCenter = (heightImg - heightContainer) / 2;
	imgStart(imgWidthCenter, imgHeightCenter);    

	$(window).resize(function() {
	    var dragMeStart = $container.width() / 2;
	    positionStart(dragMeStart);   

        var widthContainer = $container.width();
        var widthImg = $viewImg.width();
        var imgWidthCenter = (widthImg - widthContainer) / 2;
        var heightContainer = $container.height();
        var heightImg = $viewImg.height();
        var imgHeightCenter = (heightImg - heightContainer) / 2;
        imgStart(imgWidthCenter, imgHeightCenter);   
	});

    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left;
        animateTo(eventLeft);
    });

    function imgStart(imgWidthCenter, imgHeightCenter) {
        $(".before-after003__img img").css({'margin-left': -imgWidthCenter + 'px','margin-right': -imgWidthCenter + 'px','margin-top': -imgHeightCenter + 'px','margin-bottom': -imgHeightCenter + 'px'});
    }

    function positionStart(_left) {
        $dragMe.css("left", _left);
        $viewAfter.css("width", _left);
    }

    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, '200ms', 'linear');

        $viewAfter.animate({
            width: _left
        }, '200ms', 'linear');
    }

});
