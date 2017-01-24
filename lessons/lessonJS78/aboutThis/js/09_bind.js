function foo(){
  return this.a;
}
console.log(" foo() без а - ", foo());
console.log("==========  bind ===============================");

// bind передает this или параметры
var fooBind = foo.bind({
  a: "свойство анонимного объекта"
});
console.log("foo.bind - ", fooBind());
console.log("=========================================");

var obj = {
  a:   "это свойство объекта obj",
  fn:  foo,
  fnB: fooBind
};

console.log("fn:  foo - ", obj.fn());
console.log("fnB: fooBind - ", obj.fnB());
