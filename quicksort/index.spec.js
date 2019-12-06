const { quicksort } = require('./index')

describe('Quicksort', () => {
    test('should return [1, 2, 3, 4, 5] when pass an unordered array with those numbers', (done) => {
        expect(quicksort([2, 4, 3, 5, 1])).toEqual([1, 2, 3, 4, 5])  

        done()
    })    
})