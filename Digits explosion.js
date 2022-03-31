/*Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"*/

function explode(s) {
  let newar = s.toString();
  return newar.replace(/\d/g, (i) => {
    return i.repeat(i);
  });
}
explode("5688");

//other variation 
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let num = s[i]; num > 0; num--) {
      newStr += s[i]
    }
  }
  return newStr
}
