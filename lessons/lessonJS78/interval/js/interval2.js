// console.log('ok');

function foo() {
  this.number = 0;
  //
  // console.log('this == window', this == window);
  // console.log('this == foo ', this == foo);
  // console.log('this == obj ', this == obj);

  setInterval(function addNunmber() {
    //
    // console.log('=============================================');
    // console.log('this == window', this == window);
    // console.log('this == foo ', this == foo);
    // console.log('this == addNunmber ', this == addNunmber);
    // console.log('this == obj ', this == obj);

    this.number++;
    console.log('++ = ',this.number);
  }, 1000);
}

var obj = {
  timer: foo
}

obj.timer();
