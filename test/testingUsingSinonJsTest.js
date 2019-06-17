const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

// import our getIndexPage function
const remoteApis = require("../src/remoteApis");

describe("testing sinon spy", function () {
    describe("getHeyFromRemote", function () {
        it("should return hey from api", function () {
            let req = {};
            // Have `res` have a srend key with a function value `res.send()'
            let res = {
                send: sinon.spy()
            };
            remoteApis.getHeyFromApi(req, res);

            // see res.send
            console.log(res.send);


            // expect to get argument `bla` on first call
            expect(res.send.firstCall.args[0]).to.equal("Hey");
        });
    });
});


describe("testing sinon stubs", function () {
    describe("getIndexPage", function() {
        it("should send connceted User when user is logged in", function() {
            // instantiate a user object with an empty isLoggedIn function
            let user = {
                isLoggedIn: function(){}
            };

            // Stub isLoggedIn function and make it return true always
           const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);

            // pass user into the req object
            let req = {
                user: user
            };

            // Have `res` have a send key with a function value coz we use `res.send()` in our func
            let res = {
                // replace empty function with a spy
                send: sinon.spy()
            };

            remoteApis.checkingLoginUser(req, res);

            // `res.send` called once
            expect(res.send.calledOnce).to.be.true;
            expect(res.send.firstCall.args[0]).to.equal("Ooops. You need to log in to access this page");

            // assert that the stub is logged in at least once
            expect(isLoggedInStub.calledOnce).to.be.true;
        });
    });
})
