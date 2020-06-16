// Given an array (arr) as an argument complete the function countSmileys
// that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D

function countSmileys(arr) {
  let counter = 0;
  for (let i of arr) {
    if (/^[:;][-~]?[)D]$/.test(i)) counter++;
  }
  return counter;
}
