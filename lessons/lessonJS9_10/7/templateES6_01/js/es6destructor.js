// У различных объектов одинакоые свойства
var obj = {
  name: "Bart Simpson",
  position: "Schoolboy",
  solary: 0
};

var subj = {
  name: "Homer Simpson",
  position: "Nuclear engineer",
  solary: 10000
};

var marg = {
  name: "Marge Simpson",
  position: "Housewife",
  solary: 0
};

// Объекты меняются, а нам надо заполнять формы свойствами объетов.
// Мы привязаны к названию объекта - как лучше поступить?
// el0.innerHTML                  = obj.name;
// el0.innerHTML                  = subj.name;
// el0.innerHTML                  = marg.name;

// ES5 создадим функцию по присвоению имен
function anyObj(obj) {
   name = obj.name;
   return name;
}
// работает!
el2.innerHTML                  = anyObj(subj);

// А можно проще?  ES6 said: Yes!
var {name}                  = marg;
el3.innerHTML               = name;


// А если нас не устраивают имена свойств? Заменим!
var {name: nick, position: state, solary} = obj;
var str = `<ol>
            <li> ${nick} </li>
            <li> ${state} </li>
            <li> ${solary} </li>
          </ol>
`;
el1.innerHTML = str;
