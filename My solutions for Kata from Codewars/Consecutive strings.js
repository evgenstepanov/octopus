/*
You are given an array strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) return '';
  let newStrArr = [];
  for (let i = 0; i < strarr.length - k + 1; ++i) {
    let tempArr = strarr.slice(i, i + k);
    newStrArr.push(tempArr);
  }
  let strArrJoin = newStrArr.map(item => item.join(''));
  let strArrLength = strArrJoin.map(item => item.length);
  let maxLengthOfArr = Math.max.apply(null, strArrLength);
  let final = strArrJoin.find(item => item.length === maxLengthOfArr);
  return final;
}
