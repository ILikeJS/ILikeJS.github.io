function foo() {

  var self = this;
  self.number = 0;

  // console.log('this == window', this == window);
  // console.log('this == foo ', this == foo);
  // console.log('this == obj ', this == obj);



  setInterval(function addNunmber() {

    // console.log('=============================================');
    // console.log('this == window', this == window);
    // console.log('this == foo ', this == foo);
    // console.log('this == addNunmber ', this == addNunmber);
    // console.log('this == obj ', this == obj);

    self.number++;
    console.log('++ = ',self.number);
  }, 1000);
}

var obj = {
  timer: foo
}

obj.timer();
