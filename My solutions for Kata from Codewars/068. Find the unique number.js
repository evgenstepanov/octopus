// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0]; // check whether the first digit is unique or common
  for (let i of arr) {
    if (i !== arr[0]) return i; // use the first digit as a common one to find a unique one
  }
}
