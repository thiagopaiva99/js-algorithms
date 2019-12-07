const { hashtables } = require('./index')

describe('Hashtables', () => {
    test('should insert an data inside the hash table', (done) => {
        const list = hashtables({ key: 'tomato', value: 5 })

        expect(Object.keys(list).length).toEqual(4)
        expect(list['tomato']).toEqual(5)   

        done()
    })
})