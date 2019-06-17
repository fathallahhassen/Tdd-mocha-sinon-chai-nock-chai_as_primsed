const expect = require('chai').expect;
const object = require('../src/objects');

describe('testing object methods', () => {
    it('should create object', () => {
        expect(
            object.createEmptyObject()
        ).to.be.an('object');
    });

    it('should create empty object', () => {
        expect(
            object.createEmptyObject()
        ).to.not.contain.keys('id', 'name');
    });

    it('should create object with attributes', () => {
        expect(
            object.createObjectWithAttributes()
        ).to.be.an('object').to.contain.keys('id', 'test', 'date');
    });

});