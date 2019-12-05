const { selectionSort } = require('./index')

describe('Selection Sort', () => {
    test('should return index [1, 2, 3] when pass the array [3, 2, 1]', (done) => {
        expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3])
    
        done()
    })
    
    test('should return index [56, 60, 70] when pass the array [60, 70, 56]', (done) => {
        expect(selectionSort([60, 70, 56])).toEqual([56, 60, 70])
    
        done()
    })
})