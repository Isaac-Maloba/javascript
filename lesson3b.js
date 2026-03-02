// WHILE LOOP
// Below is a simple syntax of the WHILE Loop:
// 1. Initialization of the variable
// 2. The "while" keyword
// 3. The condition to be checked
// 4. The body of the WHILE Loop
// 5. Increment/Decrement

let i = 0

while (i <= 10) {
    console.log("The new value of i is: ", i)
    i++
}
console.log("===========================")

// MAP LOOP
// Examples:
// EXAMPLE 1
const prices = [10, 20, 30, 40];

// We create a new variable to hold the transformed data
const taxedPrices = prices.map((price) => {
  return price * 1.1; 
});
console.log(taxedPrices); 
// Output: [11, 22, 33, 44]
console.log("===========================")
// EXAMPLE 2
const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]
console.log("===========================")
// EXAMPLE 3
// it creates a new array
let number =[1,2,3,4,5];
let squares =number.map(num => num**2);
console.log(squares)
console.log("===========================")
// ASSIGNMENT
// Page 30 of JS PDF
// Task1: Write a WHILE Loop to print all odd numbers from 1 to 19 (Using Modulus)
let num = 1;
while (num <= 19) {
  if (num % 2 !== 0) {
    console.log(num, "is an odd number");
  }
  num++;
}
console.log("===========================")
// Task2: Write a WHILE Loop to count down all the numbers from to to 1
let nambari = 10;
while (nambari >= 1) {
  console.log(nambari);
  nambari--;
}