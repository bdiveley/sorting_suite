const assert = require('chai').assert
const sort = require('../insertionSort')
const sortNewNum = require('../insertionSort')
const sortArray = require('../insertionSort')


describe('insertion sort', function() {
  it('can make a short-circuit evaluation', function() {
    num = 5
    var newArray = [5]
    newArray = sortArray(newArray) || [num];
    assert.deepEqual(newArray, [5])
  });
  it('can sort one new element into an array', function() {
    assert.deepEqual(sortNewNum([5,1]), [1,5]);
    assert.deepEqual(sortNewNum([3,5,1]), [1,3,5]);
    assert.isArray(sortNewNum([4,8,1]))
  });
  it('can sort full array with insertion sorting method', function() {
    assert.deepEqual(sort([1]), [1]);
    assert.deepEqual(sort([5,1]), [1,5]);
    assert.deepEqual(sort([5,3,1,2]), [1,2,3,5]);
    assert.isArray(sortNewNum([4,8,1]))
    assert.deepEqual(sort([5,3,1,2,15,4,0]), [0,1,2,3,4,5,15]);
  });
});
