const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

const functions = require('../src/simpleFunctions');

// Results
sayHelloResult = functions.sayHello();
addNumbersResult = functions.addNumbers(5, 5);

describe('Simple functions', function() {

    describe("smoke test", function () {
        it("checks equality", function () {
            expect(true).to.be.true;
        });
    });

    describe('sayHello()', function () {
        it('sayHello should return hello', function () {
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function () {
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function () {
        it('addNumbers should be above 5', function () {
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });

        it('addNumbers should return type number', function () {
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});
