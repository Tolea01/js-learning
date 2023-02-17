// document.body.style.cssText = 'margin: 0; width: 100%; display: flex; justify-content: center;';

// const CssBorder = 'border: 1px solid black';
// const table = document.body.appendChild(document.createElement('table'));


// const createTableTemplate = (data) => {
//   const tr = document.createElement('tr');

//   for (const key of Object.keys(data[0])) {
//     const td = document.createElement('td');

//     td.textContent = key.toUpperCase();
//     td.style = CssBorder;

//     tr.appendChild(td);
//     table.appendChild(tr);
//   }

//   table.style.cssText = `width: 80%; text-align: center; margin-top: 30px; ${CssBorder}`;
// };

// const displayData = (data) => {
//   for (const task of data) {
//     const tr = document.createElement('tr');

//     if (typeof task === 'object') {
//       for (const taskProperty of Object.values(task)) {
//         const td = document.createElement('td');
//         td.textContent = taskProperty;
//         td.style = CssBorder;

//         tr.appendChild(td);
//       }

//       table.appendChild(tr);
//     }
//   }
// }

// // fetch('https://jsonplaceholder.typicode.com/todos')
// //   .then((data) => data.json())
// //   .then((data) => {
// //     createTableTemplate(data);
// //     displayData(data);
// //   })
// //   .catch((error) => console.error(error));

// const getData = async (url) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error('Server error');
//   }

//   return await response.json();
// };

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then((data) => {
//     createTableTemplate(data);
//     displayData(data);
//   });

// ---------------------------------------------------------------------------------------------------------------------------------------

document.body.style.cssText = 'width: 100%; display: flex; justify-content: center';

const getDataById = (data, id) => {
  const taskObject = data.find((elem) => elem.id === id)
  const table = document.body.appendChild(document.createElement('table'));
  table.style.cssText = 'width: 80%; border: 1px solid black; text-align: center';


  const insertTaskInTable = (objectProperty) => {
    const tr = document.createElement('tr');

    for (const data of objectProperty) {
      const td = document.createElement('td');
      td.textContent = data;
      td.style.border = '1px solid black';

      tr.appendChild(td);
    }

    table.appendChild(tr);
  };

  insertTaskInTable(Object.keys(taskObject));
  insertTaskInTable(Object.values(taskObject));

  table.firstChild.style.textTransform = 'uppercase';
}

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((data) => data.json())
//   .then((data) => getDataById(data, 150))
//   .catch((err) => console.error(err));

const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Server error');
  }

  return await response.json();
};

getData('https://jsonplaceholder.typicode.com/todos')
  .then((data) => getDataById(data, 150));