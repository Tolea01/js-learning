const textarea = document.querySelector('textarea');
const clearButton = document.querySelector('button');

textarea.addEventListener('input', (event) => {
  localStorage.setItem('input-value', event.target.value);
});

clearButton.addEventListener('click', () => {
  localStorage.clear();
  textarea.value = '';
})

textarea.value = localStorage.getItem('input-value');