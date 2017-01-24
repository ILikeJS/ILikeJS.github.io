
console.log('Declaration');

function fooDec() {
   console.log('this === window', this === window);
}
fooDec();

function braDec() {
  'use strict';
   console.log('use strict: this === window', this === window);
   console.log('use strict: this === undefined', this === undefined);
}
braDec();

console.log('==================================================');

console.log('Expression');
var fooExp = function fooExp() {
   console.log('this === window', this === window);
}
fooExp();

var braExp = function braExp() {
  'use strict';
   console.log('use strict: this === window', this === window);
   console.log('use strict: this === undefined', this === undefined);
}
braExp();

console.log(' ============ анонимная, самовызывающаяся функция ===========');
(function () {
  console.log('this === window', this === window)
})();  // window


(function () {
  'use strict';
  console.log('use strict: this === undefined', this === undefined)
})();  // window
