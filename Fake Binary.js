//The g means Global, and causes the replace call to replace all matches, not just the first one.

/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/


function fakeBin(x){
 return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
