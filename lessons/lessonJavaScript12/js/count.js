var count = 0;
var next = ++count;

console.log("next = ", next);
console.log("next = ", next);
console.log("next = ", next + "\n");
console.log(" ========================= ");
/* =========================================== */

function getCount() {
  var i = 0;
  return ++i;
}

console.log("getCount() =", getCount());
console.log("getCount() =", getCount());
console.log("getCount() =", getCount() + "\n");
console.log(" ========================= ");
/* ================ Function as Object ============================= */

getCounter.i = 0;
function getCounter() {
  return ++getCounter.i;
}

console.log("getCounter() =", getCounter());
console.log("getCounter() =", getCounter());
console.log("getCounter() =", getCounter() + "\n");
console.log(" ========================= ");
/* ===================== Protect version ======================== */

// getProtectedCounter.i = 10;

var getProtectedCounter = (function () {
  var i = 0;
  return function () { return i++; };
}());

console.log("getProtectedCounter =", getProtectedCounter());
console.log("getProtectedCounter) =", getProtectedCounter());
console.log("getProtectedCounter =", getProtectedCounter() + "\n");
console.log(" ========================= ");

/* ===================== Protect version ======================== */
var newCount = getProtectedCounter;

console.log("newCount =", newCount());
console.log("newCount =", newCount());
console.log("newCount =", newCount() + "\n");
console.log(" ========================= ");

/* ===================== New anonim version ======================== */

var newAnonimCount = (function () {
  var i = 0;
  return function () { return i++; };
}());

console.log("newAnonimCount =", newAnonimCount());
console.log("newAnonimCount =", newAnonimCount());
console.log("newAnonimCount =", newAnonimCount() + "\n");
console.log(" ========================= ");

















// end
