/* Клик по заголовку изменит цвет и покажет что this равен элементу,
на котором стоит слушатель */

var elem = document.getElementById('id');
elem.addEventListener('click', function(e) {
  e.target.className = "red";
  console.log('this ' + (this == elem));
  console.log('elem is ', elem);
}, false);
