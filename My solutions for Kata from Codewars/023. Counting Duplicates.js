/*
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text) {
  let obj = {};
  for (let i of text.toLowerCase()) {
    !obj.hasOwnProperty(i) ? (obj[i] = 0) : obj[i]++;
  }
  let result = 0;
  for (let i of Object.values(obj)) {
    if (i > 0) result++;
  }
  return result;
}
