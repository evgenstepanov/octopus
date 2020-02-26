/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.

Create a function groupById(arr) that creates an object from it, 
with id as the key, and array items as values.

For example:
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// my solution
function groupById(users) {
  let result = {};
  users.forEach(item => (result[item.id] = item));
  return result;
}