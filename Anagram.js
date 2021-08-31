var isAnagram = function (test, original) {
    let sizeTest = test.length;
    let sizeOriginal = original.length;

    if (sizeTest == sizeOriginal) {

        test = test.toUpperCase();
        original = original.toUpperCase();

        test = test.split('').sort().join('');
        original = original.split('').sort().join('');
        console.log(test);
        console.log(original);
        if (test == original) {
            return true;
        }
        else
            return false;
    }
    else
        return false;

};

console.log(isAnagram("Buckethead", "DeathCubeK"));