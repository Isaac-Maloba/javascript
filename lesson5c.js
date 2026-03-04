// JAVASCRIPT MODULES
// EXPORTING MODULES
// We export modulkes so that we can use them in other files/ modules in our program
// We use the keyword 'export' to export

export const calulator = (x, y) => {
    let difference = x - y
    console.log("The difference of the two numbers is: " + difference)
};

export const simpleInterest = (principle, rate, time) => {
    const Interest = (principle * rate * time)/100
    console.log("The simple interest is: " + Interest)
};

const bmi = (weight, height) => {
    let yourbmi = weight / height **2
    console.log("Your BMI is: " + yourbmi + " kg/m\u00b2")
};
export {bmi}