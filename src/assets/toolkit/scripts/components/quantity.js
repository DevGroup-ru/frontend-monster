$(function() {
  "use strict";

  $('.quantity__minus').click(function () {
    var $input = $(this).parent().find('.quantity__amount input');
    var count = parseInt($input.val()) - 1;
    if(count <= 1){
      count = 1;
    }else{
      count = count;
    }
    $input.val(count);
    return false;
  });

  $('.quantity__plus').click(function () {
    var $input = $(this).parent().find('.quantity__amount input');
    $input.val(parseInt($input.val()) + 1);
    return false;
  });

});
