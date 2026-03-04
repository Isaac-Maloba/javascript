// ARROW FUNCTIONS WITH PARAMETERS
// Parameters are values that get passed as arguments when a function is called/invokes

const greet = (name) => {
    console.log("Hello " + name + " How have you been? I trust that you are okay")
}
greet("Maloba")

console.log("===============================")
// Example 2
// Below is a function to find the area of a circle
const areaCircle = (radius) => {
    const pi = 3.142
    area = pi * radius**2
    console.log("The area of the circle is: "+ area + " cm\u00b2")
}
areaCircle(14);
areaCircle(28)

console.log("===============================")
// Come up with your own example of an arrow function that utilizes 3 parameters
// A function that finds the total surface area of a cylinder
const SACylinder = (r, d, h) => {
    const pi = 3.141592654
    const totalSA = (pi * r**2) + (pi * d * h)
    console.log("The total surface area of the cylinder is: " + totalSA + " cm\u00b2")
}
SACylinder(14, 28, 15)