const table = document.querySelector('table');
const docFragment = document.createDocumentFragment();

const createChessTable = (tableWidth, tableHeight) => {
  if (tableWidth && tableHeight) {
    for (let i = 0; i < tableWidth; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < tableHeight; j++) {
        const cell = document.createElement('td');

        if ((i + j) % 2 === 0) {
          cell.classList.add('white-cell');
        } else {
          cell.classList.add('black-cell');
        }

        row.appendChild(cell);
      }

      docFragment.appendChild(row);
    }

  } else {
    console.error('Add necessary parameters for the "createChessTable" function');
  }
  if (tableWidth <= 2 || tableWidth > 12 || tableHeight <= 2 || tableHeight > 12) {
    console.error('Error');
    return;
  }

  table.appendChild(docFragment);
};

createChessTable(8, 8);