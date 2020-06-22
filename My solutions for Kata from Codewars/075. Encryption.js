/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars, 
that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

Write two methods:
function encrypt(text, n)
function decrypt(encryptedText, n)
*/

function encrypt(text, n) {
  if (!text || !n) return text;
  for (let i = 1; i <= n; ++i) {
    let odd = [];
    let even = [];
    [...text].forEach((item, index) =>
      !(index % 2) ? even.push(item) : odd.push(item)
    );
    text = odd.concat(even).join('');
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  for (let i = 1; i <= n; ++i) {
    let arr = [...encryptedText];
    let odd = arr.slice(~~(arr.length / 2));
    let even = arr.slice(0, ~~(arr.length / 2));
    encryptedText = [];
    for (let i = 0; i < odd.length; ++i) {
      encryptedText.push(odd[i]);
      if (even[i]) encryptedText.push(even[i]);
    }
    encryptedText = encryptedText.join('');
  }
  return encryptedText;
}
