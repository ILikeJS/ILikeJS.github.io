console.log('== new Function в области видимости только глобального объекта ==');
var b = this;
var objBoo = {
  boo: function () {
     console.log('this is ',this );
     var isWin = new Function('', 'return b === window;');
     return isWin;
  }
}

console.log(' this === window ', objBoo.boo()());

console.log('При попытке обратиться к локальным переменным будет ошибка');
var objFoo = {
  foo: function () {
     var a = this;
     console.log('this is ', a);
     var isFoo = new Function('', 'return a === window;');
     return isFoo;
  }
}

console.log(' this === window ', objFoo.foo()());



var a = new Function('x',  'return x * 3;');
a(5); // 10
