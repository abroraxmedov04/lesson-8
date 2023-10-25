function myFunc(n, a) {
  if (a === 2 || a === 8 || a === 16) {
    return n.toString(a);
  } else {
    return "Invalid input try again";
  }
}
// console.log(myFunc(1254, 2));

function parseDecimal(n, a) {
  if (a === 2 || a === 8 || a === 16) {
    return parseInt(n, 10).toString(a);
  } else {
    return "Invalid input, please try again.";
  }
}
// console.log(parseDecimal("4e6", 16)); // Output: "204"

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrimeNumber(17)); // Output: true
// console.log(isPrimeNumber(24)); // Output: false

// ! array 18
function getSmallFirstNumberinArray(arr) {
  let minNumber = Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= minNumber) {
      minNumber = arr[i];
    }
  }
  if (minNumber !== Infinity) {
    return minNumber;
  } else {
    return "invalid";
  }
}
// console.log(getSmallFirstNumberinArray([3, 2, 20])); // Output: 1

//! Array 19

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > a[0] && a[i] < a[a.length - 1]) {
    res = a[i];
  }
}
// console.log(res)

// ! Array 20

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let k = 2;
let l = 8;
for (let i = 0; i < n.length; i++) {
  if ( i >= k && i <= l) {
    sum += n[i];
  }
}
// console.log(sum);

function logonChecker( login, parol) {
   if ( login.trim().length && parol.trim().length > 8 ) {
    return 'you are verified';
   } else if (login.trim().length && parol.trim().length < 8 ) {
    return 'password and login is too short';
   } else if (login.trim() < 3 ) {
    return 'username is too short';
   } else if (parol.trim().length < 3) {
    return 'password is too short';
   } else {
    return 'unknown error'
   }
}
console.log(logonChecker('ad', '1dfhgfdhgsfgfhj'));


