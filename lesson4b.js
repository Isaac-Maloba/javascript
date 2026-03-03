// ANONYMOSU FUNCTIONS IN JAVASCRIPT
// These are functions tha exist without a name
// Below are examples of such functions:
// The function below shall take the name of the variable it is contained in

const greet = function() {
    console.log("Hello there, hope your Tuesday is fine...")
}
greet(); // An anonymous function is invoked ny the name of the variable it is stored in, so the variable itself bcomes the function
// console.log(typeof(greet)) // The datatype of 'greet' is 'function'

// Below is another anonymous (self executing) function (Immediately Invoked Function Expression)
(function(){
    console.log("Welcome to the world of programming...")
})();

// Self Executing Functions run immediately without being called
// The syntax is:
(function() {
    console.log("I run immediately!");
})();
// IIFEs require the paranthesis
// The paranthese immediately after the eunction expression calls the function immediately
// The reasons for using IIFEs are:
//   a) To avoid polluting the global scope
//   b) To create private variables e.g
//         (function() {
    //          let counter = 0;
    //          console.log(counter);
//          })();
// So basically they are used for security reasons
// IIFEs can also have parameters
(function(name) {
    console.log("Hello " + name);
})("Isaac");