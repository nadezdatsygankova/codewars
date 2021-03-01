function removeEveryOther(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.splice(i + 1, 1);
    }
    return arr;
}

/*
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
*/
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]));