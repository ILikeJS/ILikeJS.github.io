// REGEX
console.log("reg = ", "Letters".replace(/L/,"B"));

function add(id, txt) {
  var elem = document.getElementById(id);
  elem.innerHTML =  txt;
}

var ex = "Lorem 123 Ipsum Dolor Sit Amet, consectetur adipisicing elit az," +
       "Изучаем Регулярные Выражения";
var a = ex.replace(/a/,"0");
var az = ex.replace(/az/,"0");
var azall = ex.replace(/[az]/,"0");
var az0 = ex.replace(/[a-z]/,"0");
var az0g = ex.replace(/[a-z]/g,"0");
var az0gi = ex.replace(/[a-z]/gi,"0");
var w = ex.replace(/\w/g,"0");
var W = ex.replace(/\W/g,"0");
add("stampA", a);
add("stampAZ", az);
add("stampAZall", azall);
add("stampAZ0", az0);
add("stampAZg", az0g);
add("stampAZgi", az0gi);
add("stampw", w);
add("stampW", W);

var t = "Letters".replace(/(Le)(tt)/g,"A$2ract a $1");
console.log("t = ", t);

console.log("B A".replace(/(\w+)\s(\w+)/,'$2 и $1 сидели на трубе'));
