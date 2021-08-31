function distinct(a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            b.push(a[i])
        }
    }
    return b;
}

console.log(distinct([1, 1, 2]));
