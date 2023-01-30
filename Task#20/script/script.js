// const input = document.querySelector('input');
// const addButton = document.querySelector('button');
// const tbody = document.querySelector('tbody');

// const addRowToTable = (tableBody) => {
//   if (!tableBody) return;

//   const row = document.createElement('tr');
//   const td = document.createElement('td')
//     .classList.add('username-td')
//     .textContent = input.value;
//   const removeButton = document.createElement('td')
//     .classList.add('remove-td');
//   const removeButtonIcon = document.createElement('i')
//     .classList.add('fa-solid', 'fa-xmark');

//   removeButton.append(removeButtonIcon);
//   row.append(td);
//   row.append(removeButton);
//   tableBody.append(row);
// };

// tbody.addEventListener('click', (event) => {
//   event.target.matches('.fa-xmark') ? event.target.closest('tr').remove() : false;
// });

// addButton.addEventListener('click', () => {
//   if (input.value) {
//     addRowToTable(tbody);
//     input.value = '';
//   }
// });




const input = document.querySelector('input');
const addButton = document.querySelector('button');
const tbody = document.querySelector('tbody');

const addRowToTable = (tableBody) => {
  if (!tableBody) return;

  const row = document.createElement('tr');
  const td = document.createElement('td');
  td.classList.add('username-td');
  td.textContent = input.value;

  const removeButton = document.createElement('td');
  removeButton.classList.add('remove-td');

  const removeButtonIcon = document.createElement('i');
  removeButtonIcon.classList.add('fa-solid', 'fa-xmark');

  removeButton.append(removeButtonIcon);
  row.append(td);
  row.append(removeButton);
  tableBody.append(row);
};


tbody.addEventListener('click', (event) => {
  event.target.matches('.fa-xmark') ? event.target.parentNode.parentNode.remove() : false;
});

addButton.addEventListener('click', () => {
  if (input.value) {
    addRowToTable(tbody);
    input.value = '';
  }
});