function foo() {
  var number = 0;

  setInterval(function addNunmber() {
    number++;
    console.log('++ = ', number);
  }, 1000);
}

var obj = {
  timer: foo
}

obj.timer();
