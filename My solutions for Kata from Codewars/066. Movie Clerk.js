// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change
// if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with
// the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine) {
  let change = { 25: 0, 50: 0 };
  for (let backs of peopleInLine) {
    switch (backs) {
      case 25:
        ++change[25];
        break;
      case 50:
        if (change[25]) {
          ++change[50];
          --change[25];
          break;
        }
      case 100:
        if (change[25] > 0 && change[50] > 0) {
          --change[25];
          --change[50];
          break;
        }
        if (change[25] > 2) {
          change[25] = change[25] - 3;
          break;
        }
      default:
        return 'NO';
    }
  }
  return 'YES';
}
