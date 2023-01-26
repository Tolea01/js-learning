const input = document.querySelector('input');
const button = document.querySelector('button');
const ol = document.querySelector('ol');

const activateButtonOnInput = (button, input) => {
  if (input.value.length != 0) {
    button.disabled = false;
  }
};

const addToList = (eventButton, input) => {
  const li = document.createElement('li');

  li.textContent = input.value;

  ol.insertAdjacentElement('beforeend', li);

  input.value = '';

  eventButton.disabled = true;
};

input.addEventListener('input', () => {
  activateButtonOnInput(button, input);
});

button.addEventListener('click', () => {
  addToList(button, input);
});

ol.addEventListener('click', (event) => {
  alert(event.target.textContent)
});