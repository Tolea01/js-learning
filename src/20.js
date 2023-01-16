const input = document.querySelector('input');
const addButton = document.querySelector('button');
const tbody = document.querySelector('tbody');

tbody.addEventListener('click', (event) => {
   if (event.target.classList.contains('fa-xmark')) {
      event.target.parentNode.parentNode.remove();
   }
});

addButton.addEventListener('click', () => {
   tbody.innerHTML += `
  <tr>
    <td style="width: 300px; height: 30px; padding-left: 10px; border: 1px solid black;">
      ${input.value}
    </td>
    <td style="width: 30px; height: 35px; border: 1px solid black;" align="center">
      <i class="fa-solid fa-xmark" style="color: red;"></i>
    </td>
  </tr>
  `;
});