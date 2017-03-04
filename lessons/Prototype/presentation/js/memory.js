var Famyli = function (nick, surname, age) {
  this.nick    = nick;
  this.surname = surname;
  this.age     = age;
  this.tell = function () {
     return "I'm " + this.nick + " " + this.surname + " " + this.age + " old.";
  }
};

Famyli.prototype.nick = 'Bart';
Famyli.prototype.surname = 'Simpson';
Famyli.prototype.age = 11;
var bart = new Famyli ();

var num = 100000;

var familys = new Array (num);
var mafiyas = new Array (num);
var i = 0;

for (i = 0; i < num; i++) {
  familys.push(Object.create(bart));
}
console.log('Famyli ready');

var Mafiya = function (nick, surname, age) {
  this.nick    = nick;
  this.surname = surname;
  this.age     = age;
  this.tell = function () {
     return "I'm " + this.nick + " " + this.surname + " " + this.age + " old.";
  }
};

for (i = 0; i < num; i++) {
  mafiyas.push( new Mafiya('Bart', 'Simpson', 11 ));
}
console.log('Mafiya ready');
