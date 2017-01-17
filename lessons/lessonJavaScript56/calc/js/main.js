
  var calc = {
    res: 0,
    add: function (a) {
      this.res += a;
      return this;
    },
    mult: function (a) {
      this.res *= a;
      return this;
    },
    dev: function (a) {
      this.res /= a;
      return this;
    },
    sub: function (a) {
      this.res -= a;
      return this;
    },
    show: function () {
      console.log('resault = ', this.res);
    }
  }

  calc.add(3).add(2).mult(20).dev(25).sub(1).show();
