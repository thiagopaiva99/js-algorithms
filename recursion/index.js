const factorial = number => 
    number === 1 
        ? number 
        : number * factorial(number - 1)

module.exports = {
    factorial
}