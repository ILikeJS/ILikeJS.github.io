// var objA =  {
//   a: 1,
//   b: 2,
//   sum: function (a, b) {
//     return a + b;
//   }
// };


function objA (a, b) {
  this.a = a;
  this.b = b;
  this.sum = function (a, b) {
    return a + b;
  }
}


function objB () {};

objB.prototype = new objA ();

var b = new objB();

console.log('b.sum = ', b.sum(2, 4));
