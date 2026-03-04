// Weird question
for (let num = 1; num <= 50; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBizz")
    }
    else if (num % 5 == 0) {
        console.log("Bizz")
    }
    else if (num % 3 == 0) {
        console.log("Fizz")
    }
    else {
        console.log(num)
    }
};
// Research on Global and Local Variables