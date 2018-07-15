const chai = require('chai');
const assert = chai.assert;
const LinkedList = require('./../LinkedList');

describe('LinkedList tests', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  it('add element to list', () => {
    list.add(2);
    assert.equal(1, list.size());
  });

  describe('remove LinkedList test', () => {
    let list;

    before(() => {
      list = new LinkedList();
      list.add(2);
      list.add(5);
      list.add(8);
      list.add(2);
    });

    it('remove element from list', () => {
      list.remove(3);
      assert.equal(3, list.size())
    });
  });

  describe('insert LinkedList test', () => {
    let list;

    before(() => {
      list = new LinkedList();
      list.add(2);
      list.add(5);
      list.add(8);
      list.add(9);
    });

    it('insert  element to list', () => {
      list.insert(3, 6);
      assert.equal(5, list.size());
    });
  });

});
