const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const input = document.getElementById('input');

plusButton.addEventListener('click', () => {
   if (input.value < 9) {
      input.value++;
   }
   if (input.value === 9) {
      plusButton.disabled = true;
   }
});

minusButton.addEventListener('click', () => {
   if (input.value > 0) {
      input.value--;
   }
   if (input.value === 0) {
      minusButton.disabled = true;
   }
});

input.setAttribute('readonly', '');