var Foo = require('../js/main.js');
describe(" add & mult ", function () {
        var elemA = Foo.add(2,3);
        var elemM = Foo.mult(2,3);


        it(' test of multiplication foo', function(){
            expect(elemM).toBe(6);
        });
        it(' test of sum foo', function(){
            expect(elemA).toBe(5);
        });
});
