/*
_id, _class, _name, _tag, _sall, _sone
_atr, _gatr, _satr, _ratr
_cl, _clrm, _cladd, _clatg, _clatgi
*/

var _id = function (id) {
  return document.getElementById(id);
}

var _class = function (cl) {
  return document.getElementsByClassName(cl);
}

var _name = function (name) {
  return document.getElementsByName(name);
}

var _tag = function (tag) {
  return document.getElementsByTagName(tag);
}

// получить список по выбранному селектору
var _sall = function (selector) {
  return document.querySelectorAll(selector);
}

// получить 1-й элемент по выбранному селектору
var _sone = function (selector) {
  return document.querySelector(selector);
}

// получить список атрибутов элемента
var _atr = function (element) {
  return element.attributes;
}

// получить значение атрибута элемента
var _gatr = function (element, name) {
  return element.getAttribute(name);
}

// установить значение атрибута элемента
var _satr = function (element, name, value) {
  return element.setAttribute(name, value);
}

// удалить значение атрибута элемента
var _ratr = function (element, name) {
  return element.removeAttribute(name);
}

//ClassList
// получить список классов элемента
var _cl = function (elem) {
  return elem.ClassList;
}

// удаляет класс/классы у элемента
var _clrm = function (elem, name1, name2) {
  return elem.ClassList.remove(name1, name2);
}

// добавляет класс/классы элементу
var _cladd = function (elem, name1, name2) {
  return elem.ClassList.add(name1, name2);
}

// добавляет класс/классы элементу
var _clatg = function (elem, name) {
  return elem.ClassList.toggle(name);
}

// добавляет класс/классы элементу по условию на i
var _clatgi = function (elem, name, i) {
  return elem.ClassList.toggle(name, i < 10);
}























//
