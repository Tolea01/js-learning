const input = document.querySelector('input');

input.addEventListener('change', () => {
  !Number(input.value) ? input.value = 0 : false;
});