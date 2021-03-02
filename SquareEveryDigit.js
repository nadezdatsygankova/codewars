function squareDigits(num) {
    let digits = num.toString().split('');
    let number = [];
    for (let i = 0; i < digits.length; i++) {
        number[i] = Number(digits[i]);
    }
    let sum = [];
    for (let i = 0; i < number.length; i++) {
        sum[i] = (number[i] * number[i]);
    }
    let finish = '';
    for (let i = 0; i < sum.length; i++) {
        finish = finish + sum[i].toString();
    }
    return Number(finish);
}
console.log(squareDigits(9119));