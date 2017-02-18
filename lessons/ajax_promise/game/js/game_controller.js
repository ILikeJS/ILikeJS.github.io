console.log("controller");

start.addEventListener('click', function() {
  reset();

});

save.addEventListener('click', function() {
  saveGame();
});

load.addEventListener('click', function() {
  loadGame();
});

del.addEventListener('click', function() {
  localStorage.clear();
});
