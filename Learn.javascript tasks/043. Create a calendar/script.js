function createCalendar(elem, year, month) {
  let date = new Date(year, month - 1);
  let day = date.getDay() === 0 ? 7 : date.getDay();
  let table = document.createElement('table');
  table.innerHTML =
    '<tr><th>Mon</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr>';
  elem.append(table);

  let counter = 1;
  for (let i = 0; i < 6; ++i) {
    let row = table.insertRow();
    console.log(row);

    for (let j = 1; j <= 7; ++j) {
      let td = document.createElement('td');
      td.innerText = counter++;
      row.append(td);
      if (row.cells.length === 7) break;
    }
  }
}

createCalendar(calendar, 2012, 9);
