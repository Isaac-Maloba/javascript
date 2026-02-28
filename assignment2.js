// The code below evaluates the amount to be paid with regard to the distance covered
 let distance = -1000.00000000000000000000000000000000000000000000000000000000000001

 if (distance >= 0 && distance <=100) {
    console.log("The amount to be paid is $5")
 }
 else if (distance >= 101 && distance <=500) {
    console.log("The amount to be paid is $10")
 }
 else if (distance >= 501 && distance <=1000) {
    console.log("The amount to be paid is $20")
 }
 else if (distance < 0) {
    console.log("Distance cannot be negative; please be serious")
 }
 else {
    console.log("The amount to be paid is $40")
 }