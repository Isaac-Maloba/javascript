// COMPARISON OPERATORS
// Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison. Here are some common comparison operators in JavaScript:
let number1 = 5
let number2 = 10
let number3 = 20

console.log("Is number1 equal to number2?", number1 == number2) // false
console.log("Is number1 greater than or equal to number2?", number1 >= number2) // false
console.log("Is number1 less than or equal to number2?", number1 <= number2) // true
console.log("Is number1 greater than number2?", number1 > number2) // false
console.log("Is number1 less than number2?", number1 < number2) // true
console.log("Is number1 not equal to number2?", number1 != number2) // true
console.log("Is number1 not equal to number1?", number1 != number1) // false

// Triples equals (===) is a strict equality operator that checks for both value and type. It returns true if both the value and type are the same, and false otherwise. Below are examples of using the triple equals operator:
let num1 = 5
let num2 = "5"
console.log("Is num1 equal to num2 using triple equals?", num1 === num2) // false
// If we had used 2 equal signs (==) instead of 3, it would have returned true because it only checks for value and not type. Below is an example of that:
console.log("Is num1 equal to num2 using double equals?", num1 == num2) // true

// LOGICAL OPERATORS
// Logical operators are used to combine multiple comparison expressions and return a boolean value based on the combination. Here are some common logical operators in JavaScript:
// Logical Operator AND (&&) returns true if all expressions are true, and false otherwise. Below is an example of using the logical AND operator:
console.log((number1 < number2) && (number2 > number1) && (number3 > number2)) // true

// Logical Operator OR (||) returns true if at least one expression is true, and false otherwise. Below is an example of using the logical OR operator:
console.log((number1 > number2) || (number2 > number1) || (number3 < number2)) // true

// Logical Operator NOT (!) returns true if the expression is false, and false if the expression is true. Below is an example of using the logical NOT operator:
console.log(!(number1 > number2)) // true
console.log(!(number1 < number2)) // false