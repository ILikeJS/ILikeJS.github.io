console.log('В нестрелочных функциях this привязан к контекту вызова');

// Простой вызов функции - оператор ()
// var globalObject = this;

console.log('============ Простой вызов функции - оператор () ===========');
var a = function a() {
  return this;
};
console.log('this === window', a() === window); // true


//Метод объекта - оператор . или []
console.log('2 ============ Метод объекта - оператор . или []  ===========');
console.log('2-a ============ Метод объекта foo.bar()  ===========');
var foo = {
    bar: a
};
console.log('foo.bar() === foo', foo.bar() === foo); // true

console.log('2-b ============ Метод объекта baz.bar = foo.bar;  ===========');
var baz = {};
baz.bar = foo.bar;
console.log('baz.bar() === baz', baz.bar() === baz); // true


console.log('2-c ========= Метод объекта var fooBar = foo.bar;  ===========');
var fooBar = foo.bar;
console.log('fooBar() === window', fooBar() === window); // true
