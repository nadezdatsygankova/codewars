function findShort(s) {
    let str = s.split(" ");
    let sorting = str.sort((a, b) => {
        return a.length - b.length;
    })
    return sorting[0].length;
}

console.log(findShort("the world"));