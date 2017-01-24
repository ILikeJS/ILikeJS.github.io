console.log('В стрелочных функциях this привязан к окружению,'
             +' в котором была создана функция');

console.log('============ Простой вызов функции - оператор () ===========');
var obj = {
  a: function() {
    var x = (() => this);
    return x;
  }
};

var fn = obj.a();
console.log(fn() === obj); // true
