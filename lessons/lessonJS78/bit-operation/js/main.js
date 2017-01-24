(function() {

  console.log('ok');
  var negarive = -8;
  var positive = 8;
  console.log('-8 = ', negarive.toString(2));
  console.log(' 8 = ', positive.toString(2));

//умножим на 4
console.log('умножим на 4');
  negarive = -8 << 2;
  positive = 8 << 2;
  console.log('(-8 << 2) = ', negarive.toString(2));
  console.log(' (8 << 2) = ', positive.toString(2));

//разделим на 2
console.log('разделим на 2 >> ЗНАК ПЕРЕНОСИТСЯ');
  negarive = -8 >> 1;
  positive = 8 >> 1;
  console.log('(-8 >> 1) = ', negarive.toString(2));
  console.log(' (8 >> 1) = ', positive.toString(2));


  //разделим на 2
  console.log('разделим на 2 c >>> ЗНАК НЕ ПЕРЕНОСИТСЯ');
    negarive = -8 >>> 1;
    positive = 8 >>> 1;
    console.log('(-8 >>> 1) = ', negarive.toString(2));
    console.log(' (8 >>> 1) = ', positive.toString(2));

})();
