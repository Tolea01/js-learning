const table = document.querySelector('table');

table.style.cssText = 'width: 500px; height: 500px; border: 2px solid black';

for (let i = 0; i < 8; i++) {
   const row = document.createElement('tr');

   for (let j = 0; j < 8; j++) {
      const cell = document.createElement('td');

      if ((i + j) % 2 === 0) {
         cell.style.cssText = 'background-color: white; border: 2px solid black'
      } else {
         cell.style.backgroundColor = 'black';
      }

      row.appendChild(cell);
   }

   table.appendChild(row);
}