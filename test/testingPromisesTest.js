const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

// This is just an async func that takes in a bool
// and that returns a promise
function someMadeUpAyncFunc(boolValue, cb) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(boolValue ? "you send true, you rock" : "You suck men!!")
        }, 2);
    })
}

// Added the `only` tag to have only this set of tests to run
describe("AsyncTest", function () {
    it("should return you send true, you rock if true is passed in", function () {
        return expect(someMadeUpAyncFunc(true)).to.eventually.equal("you send true, you rock");
    });

    it("should return You suck men!! if false is passed in", function () {
        return expect(someMadeUpAyncFunc(false)).to.eventually.equal("You suck men!!");
    });
});