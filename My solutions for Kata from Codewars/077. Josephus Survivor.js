/*
Basically you have to assume that n people are put into a circle 
and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
*/

function josephusSurvivor(items, k) {
  let arr = [];
  for (let i = 1; i <= items; ++i) arr.push(i);
  let index = 0;
  let count = 1;
  while (true) {
    if (count === k) {
      if (arr.length === 1) return arr[0];
      arr.splice(index, 1);
      index -= 1;
    }
    index = index === arr.length - 1 ? 0 : ++index;
    count = count === k ? 1 : ++count;
  }
}
