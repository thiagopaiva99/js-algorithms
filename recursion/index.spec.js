const { factorial, sum } = require('./index')

describe('Recursion', () => {
    describe('Factorial', () => {
        test('should return 120 when pass 5!', (done) => {
            expect(factorial(5)).toEqual(120)

            done()
        })

        test('should return 720 when pass 6!', (done) => {
            expect(factorial(6)).toEqual(720)

            done()
        })
    })

    describe('Sum', () => {
        test('should return 6 when pass [1, 2, 3]', (done) => {
            expect(sum([1, 2, 3])).toEqual(6)

            done()
        })

        test('should return 10 when pass [1, 2, 3, 10]', (done) => {
            expect(sum([1, 2, 3, 4])).toEqual(10)

            done()
        })
    })
})