/*
In this kata, you must create a digital root function.
A digital root is the recursive sum of all the digits in a number. 
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers.
*/

function digital_root(n) {
  while (n > 9) {
    n = String(n).split('').reduce((x, i) => +x + +i);
  }
  return n;
}
