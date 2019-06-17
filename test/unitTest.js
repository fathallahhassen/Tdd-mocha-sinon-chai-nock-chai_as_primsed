const chai = require('chai');

const expect = require('chai').expect;

const simpleFunctions = require('../src/simpleFunctions');


describe('unitTest', () => {
        it('should return the sum of two number', () => {
            expect(simpleFunctions.sum(2, 3)).to.equal(5)
        })
    }
)