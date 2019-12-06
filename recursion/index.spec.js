const { factorial } = require('./index')

describe('Recursion', () => {
    describe('Factorial', () => {
        test('should return 120 when pass 5!', (done) => {
            expect(factorial(5)).toEqual(120)

            done()
        })
    })
})