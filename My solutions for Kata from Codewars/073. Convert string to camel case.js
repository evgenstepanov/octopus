/*
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. 
The first word within the output should be capitalized only if 
the original word was capitalized (known as Upper Camel Case).
*/

function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((w, index) => (index === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join('');
}
