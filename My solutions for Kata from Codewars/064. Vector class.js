/*
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:
1. a toString method, so that using the vectors from above, a.toString() === '(1,2,3)'
2. an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/

class Vector {
  constructor(components) {
    this.vector = components;
  }
  equals(b) {
    if (this.vector.length !== b.vector.length) return false;
    for (let i = 0; i < this.vector.length; ++i) {
      if (this.vector[i] !== b.vector[i]) return false;
    }
    return true;
  }
  lengthIsEqual(a, b) {
    if (a.length !== b.length) throw Error();
  }
  add(b) {
    this.lengthIsEqual(this.vector, b.vector);
    let result = [];
    for (let i = 0; i < this.vector.length; ++i) {
      result[i] = this.vector[i] + b.vector[i];
    }
    return new Vector(result);
  }
  subtract(b) {
    this.lengthIsEqual(this.vector, b.vector);
    let result = [];
    for (let i = 0; i < this.vector.length; ++i) {
      result[i] = this.vector[i] - b.vector[i];
    }
    return new Vector(result);
  }
  toString() {
    return `(${this.vector.join(',')})`;
  }
  dot(b) {
    this.lengthIsEqual(this.vector, b.vector);
    let result = [];
    for (let i = 0; i < this.vector.length; ++i) {
      result[i] = this.vector[i] * b.vector[i];
    }
    return result.reduce((sum, i) => sum + i);
  }
  norm() {
    return Math.sqrt(
      this.vector.map((i) => i ** 2).reduce((sum, i) => sum + i)
    );
  }
}
