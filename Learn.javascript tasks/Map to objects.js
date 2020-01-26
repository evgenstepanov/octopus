/*
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, 
of objects with id and fullName, where fullName is generated from name and surname.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

//my code
let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith
