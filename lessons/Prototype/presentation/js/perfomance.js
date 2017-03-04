var Apple = function (){};
Apple.prototype.a = 5;
Apple.prototype.b = 2;
var apple = new Apple();
var next = Object.create(apple);
var next1 = Object.create(next);
var next2 = Object.create(next1);
var next3 = Object.create(next2);
var next4 = Object.create(next3);
var next5 = Object.create(next4);
var next6 = Object.create(next5);
var next7 = Object.create(next6);
var next8 = Object.create(next7);
var next9 = Object.create(next8);
console.log('a = ' + next9.a + ';  b = ' + next9.b);

function add (x, y){ return x + y;}

var sumNext = 0;
var sumApple   = 0;
var sum1= 0;
var sum2 = 0;

for (var i = 0; i < 1000; i++) {
  apple.a = 5;
  apple.b = 2;
  var startTime =  performance.now();
  for(var j = 0; j < 1000000; j++){
    apple.a += j;
    apple.b += j;
    sum1 += add(next9.a, next9.b);
  };
  var endTime = performance.now();
  sumNext += (endTime - startTime);

  apple.a = 5;
  apple.b = 2;
  var start =  performance.now();
  for(var k = 0; k < 1000000; k++){
    apple.a += k;
    apple.b += k;
    sum2 += add(apple.a, apple.b);
  };
  var end = performance.now();
  sumApple += (end - start);
}

console.log('sum1 ', sum1);
console.log('sum2 ', sum2);
console.log('Меньше время - выше скорость:');
console.log('timeNext = ', sumNext);
console.log('timeApple = ', sumApple);
