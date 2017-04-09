const expect = require('expect.js');
const uniqueValues = require('../src/exercise_8/unique_values').uniqueValues

describe('Exercise 8: unique values.', function() {
  it('should return an array with unique values.', () => {
    const arr = [1,2,3,3,3,4,5,5,5,5,6]
    const expectedValue = [1,2,3,4,5,6]
    const actualValue = uniqueValues(arr)

    expect(actualValue).to.eql(expectedValue)
  })
})
