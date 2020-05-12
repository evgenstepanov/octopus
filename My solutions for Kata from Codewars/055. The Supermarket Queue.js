// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.
// Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  if (n >= customers.length) {
    return Math.max(...customers);
  }
  if (n === 1) {
    return customers.reduce((sum, i) => sum + i);
  }
  let arr = [];
  for (let i = 0; i < customers.length; ++i) {
    if (arr.length < n) {
      arr.push(customers[i]);
    } else {
      let min = Math.min(...arr);
      arr = arr.map((item) => {
        if (item === min) {
          min = 0;
          return (item += customers[i]);
        }
        return item;
      });
    }
  }
  return Math.max(...arr);
}
