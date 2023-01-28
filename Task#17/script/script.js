const elem = document.querySelector('#elem');

const displayAndChangeElemDimensions = (htmlElement) => {
  alert(`Width: ${htmlElement.offsetWidth}\nHeight: ${htmlElement.offsetHeight}`);

  htmlElement.style.height = `${(htmlElement.offsetHeight * 2)}px`;
  htmlElement.style.width = `${(htmlElement.offsetWidth * 2)}px`;
};

elem.addEventListener('click', (event) => {
  displayAndChangeElemDimensions(event.target);
});