// Создаем собственный шаблонизатор


/* Работа со строкой
   требует знания методов indexOf и slice
   1) str.indexOf("sub") - поиск подстроки "sub" в строке str.
   Строка рассматирвается как массив букв и пробелов.
   Применив метод к строке мы получаем номер начала подстроки.
   Подсчет ведется с 0.
   2) str.slice(1,5) вернет подстроку со второй буквы по 4-ю включительно,
   т.е. до 5-й буквы
*/

/* рассмотрим строку и переменную,
   имя переменной "headline" есть в строке в виде текста  */
var str = "<h1> <%=headline%></h1>";
var headline = "Hello World";

/*
Функция принимает строку-шаблон и возвращает строку с тегами и значением,
вместо имени переменной:
Вызов функции tmpl("<h1> <%=headline%></h1>");
вернет        "<h1>Hello World</h1>"
*/

function tmpl(txt) {
  var start = txt.indexOf("<%=");
  var fin = txt.indexOf("%>");
  var variable = txt.slice(start + 3, fin);
  var before = txt.slice(0,start);
  var after = txt.slice(fin + 2,txt.length);
  var newStr = before + window[variable] +  after;
  return newStr;
}


//убедимся как работает каждая строка функции
var start = str.indexOf("<%=");             // 5
console.log('start = ', str.indexOf("<%="));
var fin = str.indexOf("%>");                // 16
console.log('fin = ', str.indexOf("%>"));
var variable = str.slice(start + 3, fin);   // headline
console.log('variable = ', variable);

//проверим работу самой функции
var res = tmpl(str);
console.log("res = ",res); // <h1> Hello World</h1>
