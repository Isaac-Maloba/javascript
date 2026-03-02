// RESEARCH ON FUNCTIONS WITH PARAMETERS, ARROW FUNCTIONS & ANONYMOUS FUNCTIONS
// 1. Functions with Parameters
// Basically, they are functions with variables passed into them so that they can work with diferennt values
//   Example 1
function greet(name) {
    console.log("Hello " + name)
}
greet("Maloba")
console.log("=================================")
//   Example 2
function add(a, b) {
    let sum = a + b
    console.log(sum)
}
add(7, 4)
console.log("=================================")
// 2. Anonymous Functions [CANNOT BE CALLED DIRECTLY BECAUSE THEY ARE STORED INSIDE THE VARIABLE]
// These are functions without a name. They are mostly used inside variables, inside callbacks, inside event listeners and in arrays
// Examples
// a) Inside a variable
const sayHello = function() {
    console.log("Hello")
}
// b) Inside Callbacks such as the setTimeout:
setTimeout(function() {
    console.log("5 seconds have passed!")
}, 5000)
console.log("=================================")
// c) In Arrays to perform a certain function on every item in a list (Map function)
// Example(s)
let numbers = [1, 2, 3]
numbers.forEach(function(num) {
    console.log(num * 2)
})
console.log("=================================")
// 3. Arrow Functions [CANNOT BE CALLED DIRECTLY BECAUSE THEY ARE STORED INSIDE THE VARIABLE]
// They are a shorter way of writing anonymous functions usually using the FAT ARROW (=>)
// Simple Example
const square = (n) => n * n
console.log(square(5))
// Complex Example
const greetUser = (name, timeOfDay) => {
  const greeting = `Good ${timeOfDay}, ${name}!`
  return greeting.toUpperCase() // .toUpperCase must be there
};
console.log(greetUser("Maloba", "morning"))
console.log("=================================")
// Map Example
let prices = [50, 200, 500]
let taxedPrices = prices.map(price => price * 1.09)
console.log(taxedPrices)
// Just for Emphasis, ANONMYMOUS AD ARROW FUNCTIONS CANNOT BE CALLED AS REGULAR FUNCTIONS BECAUSE THEY ARE STORED INSIDE VARIABLES