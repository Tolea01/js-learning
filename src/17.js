const elem = document.querySelector('#elem');

alert(`Width: ${elem.offsetWidth}\nHeight: ${elem.offsetHeight}`);

elem.addEventListener('click', () => {
   elem.style.height = (elem.offsetHeight * 2) + 'px';
   elem.style.width = (elem.offsetWidth * 2) + 'px';

   alert(`Width: ${elem.offsetWidth}\nHeight: ${elem.offsetHeight}`);
})