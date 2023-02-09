const inputName = document.querySelector('#input-name');
const selectCity = document.querySelector('#inputState');
const textarea = document.querySelector('#floatingTextarea2');
const clearButton = document.querySelector('.btn-primary');
const saveButton = document.querySelector('.btn-success');

const displayData = (value) => {
  if (!localStorage.getItem('objectData')) return;

  inputName.value = value.name;
  textarea.value = value.message;

  for (let i = 0; i < selectCity.options.length; i++) {
    if (selectCity.options[i].value === value.selectCity) {
      selectCity.selectedIndex = i;
      break;
    }
  }
};

window.addEventListener('load', () => {
  const localStorageObject = JSON.parse(localStorage.getItem('objectData'));
  displayData(localStorageObject);
});

saveButton.addEventListener('click', () => {
  const data = {
    name: inputName.value,
    selectCity: selectCity.value,
    message: textarea.value,
  };

  localStorage.setItem('objectData', JSON.stringify(data));
});

clearButton.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});