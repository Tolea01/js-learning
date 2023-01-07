window.onload = () => {
   document.body.style.background = 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)';
}

setTimeout(() => {
   document.body.style.background = 'green';
}, 3000);

document.querySelector('#buttonOrange').addEventListener('click', () => {
   document.body.style.background = 'orange';
});