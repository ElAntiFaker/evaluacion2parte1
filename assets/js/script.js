$(document).ready(function() {
  $('#animar').click(function() {
      $('.cuerpo').animate({
          left: '+=100px'
      }, 1000, function() {
      });
  });
});