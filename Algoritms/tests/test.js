const chai = require('chai');
const assert =chai.assert;
const brackets = require('.././brackets');

describe('brackets', () => {

    it('return 1',  () => {
        assert.equal(brackets('---(++++)----'), 1);
    });

    it('return 1',  () => {
        assert.equal(brackets(''), 1);
    });

    it('return 1',  () => {
        assert.equal(brackets('before (middle []) after'), 1);
    });

    it('return 0',  () => {
        assert.equal(brackets(')('), 0);
    });

    it('return 1',  () => {
        assert.equal(brackets('}{'), 1);
    });

    it('return 0',  () => {
        assert.equal(brackets('<( >)'), 0);
    });

    it('return 1',  () => {
        assert.equal(brackets('([<>()]<>)'), 1);
    });

    it('return 0',  () => {
        assert.equal(brackets('( [)'), 0);
    });

});

