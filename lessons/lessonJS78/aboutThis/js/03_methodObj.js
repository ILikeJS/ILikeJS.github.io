console.log('Вернет объект, от которого получена функция');

console.log('============== Метод объекта foo.bar()  ===========');
var foo = {
  bar: function (){
    console.log('this === window', this === window);
    console.log('this === foo',    this === foo);
    console.log('this === add',    this === add);
    console.log('this === glob',   this === glob);
  }
};
foo.bar();

console.log('====== Метод для объекта add = {}: add.bar = foo.bar;  ========');
var add = {};
add.bar = foo.bar;
add.bar();

console.log('====== Метод глобальной переменной var glob = foo.bar;  =======');

var glob = foo.bar;
console.log('glob === window.glob is ', glob === window.glob);
glob();
glob == window.globe;
