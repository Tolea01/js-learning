const input = document.querySelector('input');

input.addEventListener('input', () => {
  input.value = input.value.replace(/[^\d.,]/g, '');
});