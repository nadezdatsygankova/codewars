function odds(values) {
    // arrow it
    let newArray = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 != 0) {
            newArray.push(values[i]);
        }
    }

    return newArray;
}

let values = [2, 4, 6];
console.log(odds(values));