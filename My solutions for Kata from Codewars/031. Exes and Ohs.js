// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true  -  when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let counter = 0;
  for (let i of str) {
    if (i.toLowerCase() === 'x') counter++;
    if (i.toLowerCase() === 'o') counter--;
  }
  return counter === 0;
}
