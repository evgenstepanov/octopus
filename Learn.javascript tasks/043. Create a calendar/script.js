function createCalendar(elem, year, month) {
  let counter = 1;
  let date = new Date(year, month - 1);
  let dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
  let table = document.createElement('table');
  table.innerHTML =
    '<tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr>';
  elem.append(table);

  outer: for (let i = 1; i <= 7; ++i) {
    let row = table.insertRow();
    console.log(row);

    for (let j = 1; j <= 7; ++j) {
      let td = document.createElement('td');
      if (j >= dayOfWeek || counter > 1) {
        td.innerText = counter;
        counter++;
        row.append(td);
      } else {
        td.innerText = '';
        row.append(td);
      }
      if (new Date(year, month - 1, counter - 1).getMonth() !== month - 1) {
        td.innerText = '';
        row.append(td);
      }
    }
    if (new Date(year, month - 1, counter - 1).getMonth() !== month - 1)
      break outer;
  }
}

createCalendar(calendar, 2020, 1);
