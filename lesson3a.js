// JavaScript FOR Loops
// Loops are ued to iterate through something [Repeat something a number of times]
// Structure of the FOR Loop
// 1. "for" keyword followed by parenthesis ()
// 2. Inside the parenthesis, we'll have:[which are separated by semicolons]
//      a) initialization
//      b) setting of the condititon
//      c) increment/ decrement
// 3. Body of the FOR Loop


for (let i = 4; i <= 10; i++) {
    console.log("The new value of i is: ", i)
}

console.log("------------------------------------")

for (let i = 0; i <=10; i++) {
    if (i == 6) {
        console.log("This is the number ", i)
    }
    else {
        console.log("The new value of i is: ", i)
    }
}
console.log("=================================")
// ASSIGNMENT
// Create a FOR Loop that will be able to print out all the leap years from 2000 to 2026
// Tasks on the JS PDF Page 28

// A JS FOR Loop that Calculates the leap years from 2000 to 2026
for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year")
    }
}
console.log("=================================")
// TASKS
// Task1 : Print all odd numbers from 1 to 19
for (let num = 1; num <= 19; num++) {
    if (num % 2 != 0) {
        console.log(num)
    }
}
console.log("=================================")
// Task2 : Count down numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("=================================")
// Task3 : Write a loop to find the largest number in this array: [10, 20, 4, 45, 99, 1]
let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0]; // assuming the first number is largest:
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number is:", largest);
console.log("=================================")
 // Task4 : Write a FOR Loop to print the multiplication table of 5 from 5x1 to 5x10
 for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
