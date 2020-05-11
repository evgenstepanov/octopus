// Implement a method that accepts 3 integer values a, b, c.
// The method should return true if a triangle can be built
// with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
  let max = Math.max(...arguments);
  return max < a + b + c - max;
}
