document.body.style = 'margin: 0';

const CssBorder = 'border: 1px solid black';
const table = document.body.appendChild(document.createElement('table'));


const createTableTemplate = (data) => {
  const tr = document.createElement('tr');

  for (const key of Object.keys(data[0])) {
    const td = document.createElement('td');

    td.textContent = key.toUpperCase();
    td.style = CssBorder;

    tr.appendChild(td);
    table.appendChild(tr);
  }

  table.style.cssText = `width: 100vw; text-align: center; margin-top: 30px; ${CssBorder}`;
};

const displayData = (data) => {
  for (const task of data) {
    const tr = document.createElement('tr');

    if (typeof task === 'object') {
      for (const taskProperty of Object.values(task)) {
        const td = document.createElement('td');
        td.textContent = taskProperty;
        td.style = CssBorder;

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
  }
}

const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Server error');
  }

  return await response.json();
};

getData('http://localhost:3000/todos')
  .then((data) => {
    createTableTemplate(data);
    displayData(data);
  });