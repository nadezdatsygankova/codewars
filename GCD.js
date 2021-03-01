
/*
return y == 0 ? x : mygcd(y, x % y)

 */

function mygcd(x, y) {
  let min;
  let max;
  let i = 1;
  if (x < y) {
    min = x;
    max = y;
  }
  else {
    min = y;
    max = x;
  }
  if (max % min == 0) {
    return min;
  }
  else {
    i = min - 1;
    while (min != 0 && i != 0) {
      if (min % i == 0 && max % i == 0) {
        return i;
      }
      i--;
    }
  }
}
mygcd(1, 1);
