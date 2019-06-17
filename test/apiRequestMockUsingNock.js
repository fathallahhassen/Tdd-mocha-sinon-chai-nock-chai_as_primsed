const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../src/remoteApis').getUser;
const response = require('../response');

describe('Get User tests', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/DylanWalseth')
            .reply(200, response);
    });

    it('Get a user by username', () => {
        return getUser('DylanWalseth')
            .then(response => {
                //expect an object back
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