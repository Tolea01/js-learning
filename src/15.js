const input = document.querySelector('input');

input.addEventListener('change', () => {
   if (!Number(input.value)) {
      input.value = 0;
   }
})