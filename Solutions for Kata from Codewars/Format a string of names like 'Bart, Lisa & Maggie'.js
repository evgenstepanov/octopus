/*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
returns 'Bart'
list([])
returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function list(names) {
  let result = [];
  if (names.length === 0) {
    return String("");
  } else if (names.length === 1) {
    return names[0].name;
  } else {
    for (i = 0; i < names.length; ++i) {
      result.push(names[i].name);
    }
    newResult = result.slice(0, result.length - 1);
    return newResult.join(", ") + " & " + result[result.length - 1];
  }
}
