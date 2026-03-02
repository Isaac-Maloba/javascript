//NHIF QUESTION
let income = 7900.999999
if (income >= 0 && income < 5000) {
    console.log("Your Monthly Contribution is Ksh 150.00")
}
else if (income < 8000) {
    console.log("Your Monthly Contribution is Ksh 300.00")
}
else if (income < 12000) {
    console.log("Your Monthly Contribution is Ksh 400.00")
}
else if (income < 15000) {
    console.log("Your Monthly Contribution is Ksh 500.00")
}
else if (income < 20000) {
    console.log("Your Monthly Contribution is Ksh 600.00")
}
else if (income < 25000) {
    console.log("Your Monthly Contribution is Ksh 750.00")
}
else if (income < 30000) {
    console.log("Your Monthly Contribution is Ksh 850.00")
}
else if (income < 50000) {
    console.log("Your Monthly Contribution is Ksh 1,000.00")
}
else if (income < 100000) {
    console.log("Your Monthly Contribution is Ksh 1,500.00")
}
else if (income >= 100000) {
    console.log("Your Monthly Contribution is Ksh 2,000.00")
}
else {
    console.log("Invalid Income; Please re-enter your income")
}