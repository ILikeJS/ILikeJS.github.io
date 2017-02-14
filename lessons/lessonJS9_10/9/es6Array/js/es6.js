
    let lis = document.querySelectorAll('ul.fancy li');

    // map, filter  - не работают с array-like object
    // lis..map(x => x.innerHTML = "I'm fancy Li!"); // Error


    Array.from(lis).map(x => x.innerHTML = `I'm fancy Li${i++}!`);


    Array.from(lis, (x, i) => x.innerHTML = `I'm fancy Li${i++}!`);



// извлечь текст
    // let texts = document.querySelectorAll('ul.fancy li');
    // let names = Array.from(texts, s => s.textContent);
    // console.log(" text array", names);

    //  Array.from([0,,2])//      [ 0, undefined, 2 ]
    //  Array.from(new Array(5), () => 'a'); //    [ 'a', 'a', 'a', 'a', 'a' ]
    //  Array.from(new Array(5), (x,i) => i);//    [ 0, 1, 2, 3, 4 ]

//Array.of

// keys, values, entries
// Array.from([ 'a', 'b' ].keys()); //  [ 0, 1 ]
// Array.from([ 'a', 'b' ].values()); //  [ 'a', 'b' ]
// Array.from([ 'a', 'b' ].entries()); //  [ [ 0, 'a' ], [ 1, 'b' ] ]

//

for (let [index, elem] of lis.entries()) {
    console.log(index, elem);
}


//find ~ value, findIndex ~ key, return 1-st element for which the callback predicate returns true
var ff  = [6, -5, 8, -7].find(x => x < 0); //-5
var ffi = [6, -5, 8].findIndex(x => x < 0);  // 1

var fff = [6, 5, 8].find(x => x < 0); //undefined
var fffi = [6, 5, 8].findIndex(x => x < 0); //-1
console.log("ff = ", ff);
console.log("fff = ", fff);
//Находит NaN в массиве
[NaN].findIndex(y => Object.is(NaN, y))  //     0
