function add (a, b) {
   return a + b;
}

var m = {
  "пример": "массива в объекте",
  a:[[1, 2], [2, 3]],
  b: "word",
  
};

add(m.a[0][0], m.a[0][1]);    // 3

add(m.a[0]);                  //1,2undefined

add.apply(window, m.a[0]);      // 3


function example () {
   
  function myApply (obj, arr) {
   
    var a = obj["arr"].length;
    for (var i = 0;  i < a; i++){
       example(obj["arr"][i]);
    }
     
  }
   
}
