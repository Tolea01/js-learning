const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const input = document.getElementById('input');

input.setAttribute('readonly', '');

const updatevalue = (button, operator) => {
  if (button && operator) {
    if (operator === '+') {
      if (input.value < 9) {
        input.value++;
      }
    } else if (operator === '-') {
      if (input.value > 0) {
        input.value--;
      }
    }
    if (input.value === 9 || input.value === 0) {
      button.disabled = true;
    }
  } else {
    console.error('Enter all parameters in the "updateValue" function');
  }
}

plusButton.addEventListener('click', () => {
  updatevalue(plusButton, '+');
});

minusButton.addEventListener('click', () => {
  updatevalue(minusButton, '-');
});