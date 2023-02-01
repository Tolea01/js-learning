const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const input = document.getElementById('input');

input.setAttribute('readonly', '');

const updateValue = (button, operator) => {
  if (!button || !operator) {
    console.error('Enter all parameters in the "updateValue" function');
    return;
  }

  if (operator === '+' && input.value < 9) {
    input.value++;
  } else if (operator === '-' && input.value > 0) {
    input.value--;
  }

  button.disabled = (input.value === 9 || input.value === 0);
};

plusButton.addEventListener('click', () => {
  updateValue(plusButton, '+');
});

minusButton.addEventListener('click', () => {
  updateValue(minusButton, '-');
});