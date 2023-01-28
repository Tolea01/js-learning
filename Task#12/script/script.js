const setFirstChildColor = (element, color) => {
  element.firstElementChild ? element.firstElementChild.style.color = color : console.error('Invalid HTML element or color');
};

setFirstChildColor(document.querySelector('#elem'), 'red');