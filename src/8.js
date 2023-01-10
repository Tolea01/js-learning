const input = document.querySelector('input');
const button = document.querySelector('button');
const ol = document.querySelector('ol');

button.disabled = true;

input.addEventListener('input', () => {
   if (input.value.length != 0) {
      button.disabled = false;
   }
});

button.addEventListener('click', () => {
   ol.innerHTML += `<li>${input.value}</li>`;

   input.value = "";

   button.disabled = true;
});

ol.addEventListener('click', (event) => {
   alert(event.target.textContent)
});