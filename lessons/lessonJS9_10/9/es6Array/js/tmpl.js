const data = [{
        ask: "Сколько будет 2*2",
        answer0: 5,
        answer1: 4,
        answer2: 3
    },
    {
        ask: "Сколько будет 2/2 + 2",
        answer0: 5,
        answer1: 4,
        answer2: 3
    },
    {
        ask: "Сколько будет 2.5*2",
        answer0: 5,
        answer1: 4,
        answer2: 3
    }
];

/*
const tmpl = obj => `
   <form id="form-for-test">
     ${function () {}}
   </form>
` ;

*/

const tmpl = obj => `
   <form id="form-for-test">
     ${obj.map(obj => `
       <div class='block'>
       <p>${obj.ask}</p>
       <label><input type='checkbox'><i>${obj.answer0}</i></label>
       <label><input type='checkbox'><i>${obj.answer1}</i></label>
       <label><input type='checkbox'><i>${obj.answer2}</i></label>
       </div>
       `).join('')}
       <label><input type='submit' value='Все верно!'></label>
   </form>
`;

var parent = document.getElementsByClassName('wrapper')[0];
parent.innerHTML = tmpl(data);
// console.log(tmpl(data));
