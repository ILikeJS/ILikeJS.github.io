  console.log('Вне функций this ссылается на глобальный объект');

  console.log('this === window без строго режима = ', this === window);

  'use strict';
  console.log('use strict: this === window в строгом режиме = ', this === window);
