var	box	=	document.querySelector(".box");
var stop = document.getElementById('stop');
var	angle	=	0,
    start,
    lastTime	=	null;

// time - время в мс с момента открытия/обновления window
function	animate(time)	{
    if	(lastTime	!=	null) {
        angle	+=	(time	-	lastTime)	*	0.001;
    }
    lastTime	=	time;
    box.style.top	=	(Math.sin(angle)	*	150)	+	"px";
    box.style.left	=	(Math.cos(angle)	* 150)	+	"px";
    // console.log('time = ', time + "; performance = " + performance.now());
    // if (time < 15000) {
    start = requestAnimationFrame(animate);
  // }
}

box.addEventListener('click', function() {
  start = requestAnimationFrame(animate);
});



stop.addEventListener('click', function() {
   cancelAnimationFrame(start);
});
