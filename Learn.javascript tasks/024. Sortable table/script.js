let objAge = {};
let objName = {};
let arrByAge = [];
let arrByName = [];
let arrAll = [];
let tr = grid.lastElementChild.querySelectorAll('tr');

for (let i of tr) {
  objAge[i.firstElementChild.innerHTML] = i.lastElementChild.innerHTML;
  objName[i.lastElementChild.innerHTML] = i.firstElementChild.innerHTML;
}

for (let i of Object.entries(objAge)) {
  arrByAge.push(i[0]);
  arrByName.push(i[1]);
}

function sortByAge() {
  return arrByAge.sort((a, b) => a - b);
}

function sortByName() {
  return arrByName.sort((a, b) => (a > b) - (a < b));
}

document.body.querySelector('[data-type = number]').onclick = function(event) {
  let arr = sortByAge();
  let j = 0;
  for (let i of tr) {
    i.innerHTML = `<td>${arr[j]}</td><td>${objAge[arr[j++]]}</td>`;
  }
};
let arr = sortByName();
document.body.querySelector('[data-type = string]').onclick = function(event) {
  let j = 0;
  for (let i of tr) {
    i.innerHTML = `<td>${objName[arr[j]]}</td><td>${arr[j++]}</td>`;
  }
};
