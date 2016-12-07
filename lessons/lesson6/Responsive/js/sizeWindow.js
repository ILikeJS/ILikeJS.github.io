window.onload    = createWindowWidthElement;
window.onresize  = showSize;



 function showSize() {

/* впишем текст внутри этого элемента */
  document.getElementsByClassName('box')[0].innerHTML =
  "<p id='sizeIW'>" + "innerWidth = " + window.innerWidth + "</p>" +
  "<p id='sizeOW'>" + "clientWidth = " + document.documentElement.clientWidth + "</p>";
  var childHeadline = document.getElementById('sizeIW');
  var childHeadline1 = document.getElementById('sizeOW');

    /* зададим css свойства <h2>  */
  childHeadline.style.color = "maroon";
  childHeadline.fontSize = "18px";
  childHeadline1.style.color = "maroon";
  childHeadline1.fontSize = "18px";
  childHeadline.style.padding = "0";
  childHeadline.style.margin = "0";
  childHeadline1.style.padding = "0";
  childHeadline1.style.margin = "0";
}


function createWindowWidthElement() {

/*  создадим элементы <div></div>  */
  var child = document.createElement("div");
  child.className = "box";
  child.innerHTML = " <p id='sizeIW'></p>" +
  " <p id='sizeOW'></p>";

  /* зададим css свойства <div> */
  child.style.position = "fixed";
  child.style.zIndex = "100";
  child.style.top = "0";
  child.style.right = "0";
  child.style.width = "200px";
  child.style.height = "72px";
  child.style.borderRadius = "5px";
  child.style.lineHeight = "36px";
  child.style.fontSize = "16px";
  child.style.cursor = "default";
  child.style.textAlign = "center";
  child.style.background = "hsla(100, 5%, 5%, 0.2)";

  /* присоеденим к DOM  */
  document.body.appendChild(child);

  showSize();
}
