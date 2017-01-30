$(document).ready(function() {

  $( "#clickme" ).click(function() {
    console.log('ok');
    $( "#ball" ).animate({
      opacity: 0.5,
      left: "+=50",
      height: "toggle"
    }, 2000, function() {
      // Animation complete.
      console.log('Fin');
    });
  });


});
