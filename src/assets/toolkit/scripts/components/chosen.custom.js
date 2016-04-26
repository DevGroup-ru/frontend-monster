$(function() {
  "use strict";	
try {

	//for work on mobile devices

	$.fn.extend({
		chosenBrowser: function() {
			AbstractChosen.browser_is_supported = function() {
		      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
		        return true;
		      }
		      if (/Android/i.test(window.navigator.userAgent)) {
		        if (/Mobile/i.test(window.navigator.userAgent)) {
		          return true;
		        }
		      }
		      if (/IEMobile/i.test(window.navigator.userAgent)) {
		        return true;
		      }
		      if (/Windows Phone/i.test(window.navigator.userAgent)) {
		        return true;
		      }
		      if (/BlackBerry/i.test(window.navigator.userAgent)) {
		        return true;
		      }
		      if (/BB10/i.test(window.navigator.userAgent)) {
		        return true;
		      }
		      if (window.navigator.appName === "Microsoft Internet Explorer") {
		        return document.documentMode >= 8;
		      }
		      return true;
		    }
		}
    });

	$('select.chosen-select').chosen({inherit_select_classes: true}).chosenBrowser();

  	/*$('select.icon-select').chosenIcon();*/

} catch (e) {
}
});