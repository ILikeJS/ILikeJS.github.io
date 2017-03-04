function Family () {};
Family.prototype.surname = "Simpson";
var boy = new Family ();
boy.surname;              //"Simpson"
boy.surname = "Fry";
Family;                  // function Family()
boy;  //Object { surname: "Fry" }
var girl = new Family (); girl.surname;  // "Simpson"
var nextBoy = Object.create(boy);
nextBoy.surname;  //"Fry"
nextBoy;  // Object {  }
nextBoy.age;  //undefined
delete nextBoy.surname;  //true
nextBoy.surname; //"Fry"
delete boy.surname;  //true
nextBoy.surname; //"Simpson"
