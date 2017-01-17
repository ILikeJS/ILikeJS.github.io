var scope = "global";
function checkscope() {
    var scope = "local";
    return console.log(scope);
}
checkscope();

/* ================= Add inner function f() ============================ */
var scopeII = "global scopeII";
function checkscopeII() {
    var scopeII = "local scopeII";
    function f() { return console.log("scopeII = " + scopeII); }
    return f();
}
checkscopeII();


/* =================== f() --> ()()=========================== */
var scope3 = "global scope3";
function checkscope3() {
    var scope3 = "local scope3";
    function f() { return console.log("scope3 = " + scope3); }
    return f;
}
checkscope3()();
