// ARROW FUNCTIONS
// Are functions introduced in ECMA Ssript 6 and they give us the latest/ modern way of defining functions in a compact manner
// At times, the arrow functions can be said to be anonymous functions because they use the name of the variable they are contained in.
// Example:

const sayHello = () => {
    console.log("This is an arrow function")
}
sayHello()

console.log("==============================")

// Create an arrow function that can find the product of 3 numbers
const productNumbers = (num1, num2, num3) => {
    product = num1 * num2 * num3
    console.log("The product of the three numbers is: ", product)
}
productNumbers(5, 6, 7)
// Method 2
console.log("==============================")
const multiply = () => {
    let num5 = 5
    let num6 = 6
    let num7 = 7
    answer = num5*num6*num7
    console.log("This is the product:",answer)
}
multiply();

