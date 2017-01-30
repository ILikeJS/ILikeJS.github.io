var box = document.querySelector(".box");
var stop = document.getElementById('stop');
var	angle	=	0,
    interval,
    lastTime	=	null;

// time - время в мс с момента клика
function animate(time) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    lastTime = time;
    box.style.top = (Math.sin(angle) * 150) + "px";
    box.style.left = (Math.cos(angle) * 150) + "px";
}

box.addEventListener('click', function() {
    var time = 0;

        interval = setInterval(function() {
            time += 10;
            animate(time);

        }, 10);
        if (time > 15000) {
        clearInterval(interval);
        }
});

stop.addEventListener('click', function() {
   clearInterval(interval);
});
