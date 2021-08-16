function stray(numbers) {
    let res = numbers[0];
    for (let i = 1; i < numbers.length; i++)
        res = res ^ numbers[i];
    return res;
}
let numbers = [17, 17, 3, 17, 17, 17, 17];
console.log(stray(numbers));