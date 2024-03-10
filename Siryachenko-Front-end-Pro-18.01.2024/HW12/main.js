var table = document.createElement('table');

  // Заповнення таблиці числами від 1 до 100
  var counter = 1;
  for (var i = 0; i < 10; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
      var cell = document.createElement('td');
      cell.textContent = counter++;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);