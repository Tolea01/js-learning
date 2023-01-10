const parent = document.querySelector('#parent');

document.querySelector('button').addEventListener('click', () => {
   parent.removeChild(parent.firstElementChild)
})