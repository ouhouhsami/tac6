const assert = require('assert');
const Foo = require('./foo');

describe("Foo class", function(){
    it("should return 'baz' when one call bar", function(){
        const foo = new Foo();
        assert.equal(foo.bar(), 'baz');
    })
})
