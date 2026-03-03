// FUNCTIONS WITH PARAMETERS
// Parameters are values that get passed as arguments when we invoke a function
// Parameters help us to create functions that can be re-used through out the program

function greeting(name) {
    console.log("Hello", name, "How have you been?")
}
greeting("Maloba")

console.log("===========================")

// Below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2) {
    sum = number1 + number2
    console.log("The sum of the two numbers is: ", sum)
}
addition(50, 69)

console.log("===========================")
// Calculate the area of a triangle whose base is 20 and height is 12
function areaTriangle(base, height) {
    area = (0.5 * base) * height
    console.log("The area of the triangle is: ", area)
}
areaTriangle(20, 12)

// Find the simple interest given the principal as 50000, rate as 5% and time as 8 years
function simpleInterest (principal, rate, time) {
    interest = (principal * rate * time)/100
    console.log("The simple interet is: ", interest)
}

simpleInterest(50000, 5, 8)