// wrong way
const expect = require('chai').expect;

const getUser = require('../src/remoteApis').getUser;

describe('Get User tests', () => {
    it('Get a user by username', () => {
        return getUser('DylanWalseth')
            .then(response => {
                //expect an object back
                console.log('response', response);
                expect(typeof response).to.equal('object');
                // same as to.be.an('object');

                //Test result of name, company and location for the response
                // to.contain.keys('id', 'name', 'date');
                expect(response.name).to.equal('Dylan Walseth')
                expect(response.company).to.equal('Google');
                expect(response.location).to.equal('Sunnyvale, CA')
            });
    });
});