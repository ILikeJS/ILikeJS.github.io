function setId(tag, id) {
  document.getElementsByTagName(tag)[0].id = id;
  return this;
}

function setColor(id, color) {
  document.getElementById(id).style.color = color;
  return this;
}


setId("h1", "headline").setColor("headline", "red");
