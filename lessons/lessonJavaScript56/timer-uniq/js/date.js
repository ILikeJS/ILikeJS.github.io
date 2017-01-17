var d = new Date();

console.log('new Date() = ', d);
console.log('Date.getMilliseconds() = ', d.getMilliseconds());
console.log('Date.getSeconds() = ', d.getSeconds());
console.log('Date.getMinutes() = ', d.getMinutes());
console.log('Date.getHours() = ', d.getHours());

/* Метод now() возвращает количество миллисекунд,
   прошедших с 1 января 1970 года 00:00:00 по UTC по текущий момент времени
   в качестве числа. */
console.log('Date.now() = ', Date.now());

var beginning                      = Date.now();
var pressStop;
setTimeout(function () {
  var pressStop                        = Date.now();
  console.log('0! pressStop - beginning = ', pressStop - beginning);
}, 0);
setTimeout(function () {
  var pressStop                        = Date.now();
  console.log('4! pressStop - beginning = ', pressStop - beginning);
}, 4);
setTimeout(function () {
  var pressStop                        = Date.now();
  console.log('10! pressStop - beginning = ', pressStop - beginning);
}, 10);
setTimeout(function () {
  var pressStop                        = Date.now();
  console.log('100! pressStop - beginning = ', pressStop - beginning);
}, 100);



/*
timerCounter                 = function() {

    let beginning                      = Date.now();
    let delta;

    function metronom() {
        let current                    = Date.now();
        delta                          = current - beginning;
    }

    metronom.get                       = function() {
        return delta;
    };

    metronom.set                       = function(value) {
        beginning                      = Date.now() - value;
    };

    metronom.reset                     = function() {
        beginning                      = Date.now();
        delta                          = 0;
    };

    return metronom;
};
*/
