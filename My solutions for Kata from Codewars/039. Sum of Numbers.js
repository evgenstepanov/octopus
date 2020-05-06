// Given two integers a and b, which can be positive or negative,
// find the sum of all the numbers between including them too and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  let result = 0;
  if (a < b) {
    while (a <= b) result += a++;
  } else {
    while (b <= a) result += b++;
  }
  return result;
}
