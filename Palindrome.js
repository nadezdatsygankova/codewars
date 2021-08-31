function isPalindrome(line) {
    line = line.toString();
    let len = line.length;
    for (let i = 0; i < len / 2; i++) {
        if (line[i] !== line[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(123456));