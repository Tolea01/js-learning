const inputName = document.querySelector('#input-name');
const selectCity = document.querySelector('#inputState');
const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
const languages = [];
const textarea = document.querySelector('#floatingTextarea2');
const clearButton = document.querySelector('.btn-primary');
const saveButton = document.querySelector('.btn-success');

window.addEventListener('load', () => {
  const localStorageObject = JSON.parse(localStorage.getItem('objectData'));
  displayData(localStorageObject);
});

saveButton.addEventListener('click', () => {
  if (localStorage.length) return;

  const data = {
    name: inputName.value,
    selectCity: selectCity.value,
    languages,
    message: textarea.value,
  };

  checkboxes.forEach((checkbox) => checkbox.checked ? languages.push(checkbox.id) : null);

  localStorage.setItem('objectData', JSON.stringify(data));
});

clearButton.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

const displayData = (value) => {
  if (!localStorage.getItem('objectData')) return;

  inputName.value = value.name;
  textarea.value = value.message;

  for (const i in selectCity) {
    if (selectCity.options[i].value === value.selectCity) {
      selectCity.selectedIndex = i;
      break;
    }
  }

  for (const checkbox of checkboxes) {
    if (value.languages.includes(checkbox.id)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
};