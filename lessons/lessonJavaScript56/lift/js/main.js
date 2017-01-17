(function() {
  console.log('first is a ', typeof first);
  console.log('second is a ', typeof second);

  first();
  second();

  // declarations
  function first() {
    return console.log('first is work');
  }

  // expressions
  var second = function second () {
    return console.log('second is work');
  }
})();
