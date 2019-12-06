const factorial = number => 
    number === 1 
        ? number 
        : number * factorial(number - 1)

const sum = array => {
    if (!array.length) {
        return 0
    }

    const [firstNumber] = array

    array.shift()

    return firstNumber + sum(array)
}

module.exports = {
    factorial,
    sum
}