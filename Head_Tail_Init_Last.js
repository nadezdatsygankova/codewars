/*Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]

*/



function head(arr) {
  return arr[0];
}

function tail(arr) {
  let newarr = [];
  for (let index = 1; index < arr.length; index++) {
    newarr.push(arr[index]);
  }
  return newarr;
}

function init(arr) {
  let newarr = [];
  for (let index = 0; index < arr.length-1; index++) {
    newarr.push(arr[index]);
  }
  return newarr;
}

function last(arr) {
  return arr[arr.length-1];
}

console.log(head([3, 1, 8]));
console.log(tail([3, 1, 8]));
console.log(init([3, 1, 8]))
console.log(last([3, 1, 8]))


//Clever solution

function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) {return a.slice(1)}
