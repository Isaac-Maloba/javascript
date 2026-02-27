// Objects Datatype
// An object in javascipt is a datatype that is used to store data in key-value pairs. It is similar to a dictionary in python. It is defined using curly braces {} and the key-value pairs are separated by commas. The key is a string and the value can be of any data type. Below is an example of an object in javascript:
let person = {
    Name: "Maloba Isaac",
    Age: 50,
    isRegistered: true,
    Occupation: "Student"
};

console.log("The details of the person are: ", person)

// To access the values of an object, we can use the dot notation or the bracket notation. Below are examples of both:
console.log("The name of the person is: ", person.Name) // using dot notation
console.log("The age of the person is: ", person["Age"]) // using bracket notation

// Check the datatype of the variable person
console.log("The datatype of the variable person is: ", typeof(person))

// For the record, to convert a javascipt object to a python dictionary, we can use the JSON.parse() method. Below is an example of how to do that:
let personJSON = JSON.stringify(person) // convert the object to a JSON string
console.log("The JSON string of the person is: ", personJSON)

// Similarly, to convert a python dictionary to a javascipt object, we can use the JSON.parse() method. Below is an example of how to do that:
let personObj = JSON.parse(personJSON) // convert the JSON string back to an object
console.log("The object of the person is: ", personObj)

// Now, the difference between a python dictionary, a javascipt object and data in JSON format when dealing with APIs is that a python dictionary is a data structure that is used to store data in key-value pairs in python. A javascipt object is a data structure that is used to store data in key-value pairs in javascipt. JSON (JavaScript Object Notation) is a lightweight data interchange format that is used to transmit data between a server and a client. It is based on a subset of the JavaScript programming language and is easy for humans to read and write. When dealing with APIs, the data is usually transmitted in JSON format, which can be easily converted to a javascipt object or a python dictionary for further processing.


// Array DataType
// An array in javascipt is a datatype that is used to store multiple values in a single variable. It is defined using square brackets [] and the values are separated by commas. The values can be of any data type and they are on indexes. Below is an example of an array in javascipt:
let fruits = ["apple", "mango", "banana", "grape"]
console.log("The fruits are: ", fruits)

// To access the values of an array, we can use the index of the value. The index starts from 0. Below is an example of how to access the values of an array:
console.log("The first fruit is: ", fruits[0]) // accessing the first fruit
console.log("The second fruit is: ", fruits[1]) // accessing the second fruit
console.log("The third fruit is: ", fruits[2]) // accessing the third fruit
console.log("The fourth fruit is: ", fruits[3]) // accessing the fourth fruit

// You can also slice an array to get a range of values. Below is an example of how to slice an array:
console.log("The first three fruits are: ", fruits.slice(0, 3)) // slicing the first three fruits

// To loop through an array, we can use the for loop or the forEach loop. Below are examples of both:
// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("The fruit at index ", i, " is: ", fruits[i])
}
// Using forEach loop
fruits.forEach(function(fruit, index) {
    console.log("The fruit at index ", index, " is: ", fruit)
})

// To loop through an object, we can use the for...in loop. Below is an example of how to loop through an object:
for (let key in person) {
    console.log("The key is: ", key, " and the value is: ", person[key])
}