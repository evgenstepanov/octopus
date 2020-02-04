/*
Given an array, find the integer that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  let obj = {};
  A.forEach(item =>
    A.hasOwnProperty(obj[item]) ? (obj[item] += 1) : (obj[item] = 1)
  );
  for (let i of Object.keys(obj)) {
    if (obj[i] % 2 !== 0) return +i;
  }
}
