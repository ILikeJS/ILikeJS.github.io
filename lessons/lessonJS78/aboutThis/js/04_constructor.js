
function Construct(text){
  this.text = "текст";
  console.log('this === window', this === window);
}

console.log('Вызов как обычной функции  - без new:');
Construct();


console.log('Вызов как конструктор - с new:');
var cons = new Construct();
cons;
console.log('cons is ', typeof cons);
console.log('Construct is ', typeof Construct);

console.log('Переменная функции недоступна');
console.log('Construct.text = ', Construct.text);

console.log('========================================');
function Cons(text){
  this.text = "слово";
}

console.log('сравнение объектов как функций');

var first = Cons();
var second = Cons();
console.log('first === second is ', first === second  );

console.log('сравнение объектов как конструторов');

var one = new Cons();
var two = new Cons();
console.log('one === two is ', one === two  );

console.log('one.text = ', one.text);
console.log('two.text = ', two.text);

console.log('========================================');
console.log('Переменная конструторов доступна');
function Co(){
  this.a = "локальную переменную";
  return {a: "свойство объекта"};
}

var co = new Co();
console.log("конструктор покажет содержимое return ", co.a);


function C(){
  this.a = "локальную переменную";
}

var c = new C();
console.log("конструктор без return покажет ", c.a);
