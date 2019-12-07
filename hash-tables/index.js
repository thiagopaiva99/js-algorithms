const hashtables = ({ key, value }) => {
    const list = {
        'banana': 1,
        'apple': 2,
        'avocado': 3
    }

    list[key] = value

    return list
}

module.exports = {
    hashtables
}