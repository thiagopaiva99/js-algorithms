const { binarySearch } = require('./index')

const list = [1, 2, 3, 4, 5, 6, 7, 8]

describe('Binary Search', () => {
    test('should return index 2 when find the number 3', (done) => {
        expect(binarySearch(list, 3)).toBe(2)
    
        done()
    })
    
    test('should return index 7 when find the number 8', (done) => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8]
    
        expect(binarySearch(list, 8)).toBe(7)
    
        done()
    })
})