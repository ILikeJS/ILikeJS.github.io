/*
var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function next() {
        var scope = "next scope";
        return console.log(scope);
    }
    return next();
}
checkScope();
*/

var scope = "global scope";
console.log("global = ", scope);
function checkScope() {
    var scope = "local scope";
    console.log("checkScope() = ", this.scope);
    function next() {
        var scope = "next scope";
        console.log("next() = ", scope);
        return console.log(scope);
    }
    return next();
}
console.log("global before checkScope() = ", scope);
checkScope();
console.log("global after checkScope() = ", scope);
