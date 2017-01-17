var a = 5;
var b = 2;

function add () {
  return a + b;
}

console.log('add = ', add());
console.log(' =======================================');

function deepAdd () {
  var a = 10;
  var b = 20;

  function subAdd () {
    return a = a + b;
  }
  return subAdd;
}
var link = deepAdd ();
var a = 2;
a = 3;
a = a + 3;

console.log('add = ', add());
console.log('deepAdd = ', deepAdd());
console.log(' =======================================');
function dive () {
  var a = 1;
  var b = 2;
  var c = 3;

  function subDive () {
    a = 10;
    b = 20;

    function superSubDive () {
      a = 100;
      var txt = 'superSubDive a = ' + a + '\n' + 'superSubDive b = ' + b
                + '\n' + 'superSubDive c = ' + c;
      return console.log(txt);
    }
    return superSubDive ();
  }

  return subDive();
}

dive();
