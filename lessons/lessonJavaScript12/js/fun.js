
function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

console.log(sum(2, 3));

 var arr = [0, 1, 2, 3, 4, 5];

var total = arr.reduce(function (a, b) {
      return a + b;
});

console.log("sum of array", total);

var newArr = arr.map(function (n){
  return n * 10;
});

console.log("new array * 10 = ", newArr);

var filtredArr = arr.filter(function (n) {
      return n <= 2;
});

console.log("new array < 3 = ", filtredArr);
