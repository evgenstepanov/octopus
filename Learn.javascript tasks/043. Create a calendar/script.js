year.onchange = month.onchange = function() {
  if (year.value === '' || month.value === '') return;
  let table = document.getElementById('table');
  if (table) table.remove();
  createCalendar(calendar, year.value, month.value);
};

function createCalendar(elem, year, month) {
  let monthJs = month - 1;
  let date = new Date(year, monthJs);
  let dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
  let table = document.createElement('table');
  table.id = 'table';
  table.innerHTML =
    '<tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr>';
  elem.append(table);

  let counter = 1;
  while (true) {
    let row = table.insertRow();
    for (let j = 1; j <= 7; ++j) {
      let td = document.createElement('td');
      if ((j >= dayOfWeek || counter > 1) && date.getMonth() === monthJs) {
        td.innerText = counter;
        date = new Date(year, monthJs, counter);
        if (date.getMonth() !== monthJs) {
          td.innerText = '';
          row.append(td);
        } else {
          counter++;
          row.append(td);
        }
      } else {
        td.innerText = '';
        row.append(td);
      }
    }
    date = new Date(year, monthJs, counter);
    if (date.getMonth() !== monthJs) break;
  }
}
