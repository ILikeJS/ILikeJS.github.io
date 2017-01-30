$(document).ready(function() {
    var angle = 0,
        // off = true,
        box = $("#box"),
        stop = $("#stop");

    function animate() {
        angle += 0.05;
        var newLeft = (Math.cos(angle) * 150);
        var newTop  = (Math.sin(angle) * 150);

            box.animate({
                left: newLeft,
                top: newTop,
                // opacity: "toggle",
              }, 50, function() {
                // Animation complete.
                // if (off) {
                animate();
              // }
            });


            // step
            /*
            box.animate({
                left: newLeft,
                top: newTop,
                // opacity: "toggle",
              }, { step: function(now, fx) {
                animate();
            }
            });
*/
    };

    box.click(function() {
        animate();

        // off = true;
    });

    stop.click(function() {
      box.stop();
        // off = false;

        // HARD
        // box.finish();
    });
});
