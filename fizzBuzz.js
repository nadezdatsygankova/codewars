function fizzbuzz(n) {
    let newString = [];
    for (let i = 1; i < n + 1; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            newString.push("FizzBuzz");
        }
        else if (i % 5 == 0) {
            newString.push("Buzz");
        }
        else if (i % 3 == 0) {
            newString.push("Fizz");
        }
        else {
            newString.push(i);
        }
    }
    return newString;
}

console.log(fizzbuzz(10));