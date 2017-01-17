function add () {
  var temp = 0;
  return ++temp;
}

console.log('1 = ', add());
console.log('2 = ', add());
console.log('3 = ', add());
console.log('4 = ', add());
console.log('5 = ', add());
console.log('=============================================================');
var badd = add;
console.log('1 = ', badd());
console.log('2 = ', badd());
console.log('3 = ', badd());
console.log('4 = ', badd());
console.log('5 = ', badd());

console.log('=============================================================');
console.log(this);
function timerCounter () {
    var temp = 0;

    function counter() {
        return ++temp;
    }

    return counter;
};

var ticTac = timerCounter();

console.log('1 = ', ticTac());
console.log('2 = ', ticTac());
console.log('3 = ', ticTac());
console.log('4 = ', ticTac());
console.log('5 = ', ticTac());


console.log('temp = ', timerCounter().temp);
