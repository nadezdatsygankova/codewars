function factorial(n) {
    let factorialNumber;
    if (n == 0 || n == 1) {
        return factorialNumber = 1;
    }
    else if (n == 2) {
        return factorialNumber = 2;
    }
    else {
        let newNumber = factorial(n - 1);
        return factorialNumber = newNumber * n;
    }


}

/*
function factorial(n)
{
   let factorialNumber;
   if(n < 0 || n > 12){
    throw new RangeError('')
  }
    if (n == 0 || n == 1) {
        return factorialNumber = 1;
    }
    else if (n == 2) {
        return factorialNumber = 2;
    }
    else {
        let newNumber = factorial(n - 1);
        return factorialNumber = newNumber * n;
    }

}*/

/*
better
function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
*/

console.log(factorial(3));
;