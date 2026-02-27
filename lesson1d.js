// String DataType
// A string is a series/ sequence of characters that are enclosed inside of quotation marks
let name = "Maloba"
console.log("My name is: ", name)
console.log(typeof(name))

// Floating Point Data Type
// A floating point is a number with a decimal
quantity = 45.9
console.log("The quantity of sugar bought is: ",quantity, "kg")
console.log(typeof(quantity))

// Boolean DataType
// It returns True or False
let isAdult = true
let isRegistered = false
console.log("Is Maloba an adult?", isAdult)
console.log("Is Maloba registered as a voter?", isRegistered)
console.log(typeof(isAdult))
console.log(typeof(isRegistered))

console.log("-----------------------------")
// Undefined DataType
// Undefined DataType is a datatype that has ben declared but no value has been assigned to it.
let county;
console.log("The county is: ", county)

console.log("-----------------------------")
// Null DataType
// This one is a datatype that contains null values
let username = null
console.log("The username is: ", username)

// Research on the datatypes below, give examples and show how to access items of an object and of an array
// Object DataType
// Array DataType
console.log("-----------------------------")
// Array DataType
// This is more or less similar to a list in python. So it basically stores multiple values in order using square brackets []. The indexing is similar to python; starts from 0
let fruits = ["apple", "mango", "banana", "grape"]
console.log(fruits)
console.log("-----------------------------")
// To access items in an array, we use the indexes
console.log(fruits[3]) // displays grape
console.log("-----------------------------")

// To select a range of items from an array we use the .slice function as below:
console.log(fruits.slice(0, 3))
console.log("-----------------------------")
// To change an item in an array, do as below:
fruits[2] = "dragonfruit"
console.log(fruits)

// An array can also be used ot store mixed datatypes, i.e string, number, null, true e.t.c
console.log("-----------------------------")

// Object DataType
// Again, it is more or less a a dictionary. So basically, it stores data in key-value pairs using carry braces {}
let student = {
    "name": "Maloba",
    "age": 18,
    "grade": "A"
}
console.log(student)
console.log("-----------------------------")
// Accessing items in an object is as follows:
console.log(student.name)

console.log("-----------------------------")
console.log(student["age"])
console.log("-----------------------------")
// Changing/ modifying items in an object is doenas follows:
student.age = 19
console.log(student.age)
console.log("-----------------------------")
// You can also combine objects and arrays to make an array of object or an object of arrays:
// An Array of Objects (Most preferred)
let students = [
  { name: "Isaac", grade: 85 },
  { name: "John", grade: 90 },
  { name: "Mary", grade: 78 }
]
// Accessing the objects
console.log(students[0].name);  // "Isaac"

console.log("-----------------------------")
console.log(students[1].grade); // 90
console.log("-----------------------------")
// An Object of Arrays
let school = {
  students: ["Isaac", "John", "Mary"],
  grades: [85, 90, 78],
  subjects: ["Math", "Physics", "History"]
}
// Accessing the arrays
console.log(school.students)     // entire array

console.log("-----------------------------")
console.log(school.students[0])  // "Isaac"

console.log("-----------------------------")
console.log(school.grades[1])    // 90