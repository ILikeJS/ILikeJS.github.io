console.log('В стрелочных функциях this привязан к окружению,' 
             +' в котором была создана функция');
// Простой вызов функции - оператор ()
// var globalObject = this;

console.log('============ Простой вызов функции - оператор () ===========');
var a = (() => this);
console.log('this === window', a() === window); // true





//Метод объекта - оператор . или []
console.log('2 ============ Метод объекта - оператор . или []  ===========');
console.log('2-a ============ Метод объекта foo.bar()  ===========');
var foo = {
    bar: () => this
};
console.log('foo.bar() === window', foo.bar() === window); // true

console.log('2-b ============ Метод объекта baz.bar = foo.bar;  ===========');
var baz = {};
baz.bar = foo.bar;
console.log('baz.bar() === window', baz.bar() === window); // true


console.log('2-c ========= Метод объекта var fooBar = foo.bar;  ===========');
var fooBar = foo.bar;
console.log('fooBar() === window', fooBar() === window); // true
