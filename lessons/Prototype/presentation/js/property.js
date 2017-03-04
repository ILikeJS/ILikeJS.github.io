var Family = function (surname) {
   this.surname = surname || "Simpson";
};

var Boy = function (name) {
   this.name = name || "Bart";
   Family.call(this, surname);
   return this.name + " " + this.surname;
};

var bart = new Boy ();

bart.name + " " + bart.surname;
