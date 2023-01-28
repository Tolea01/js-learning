const addExclamationToPreviousHTMLElement = (element) => {
  element ? elem.previousElementSibling.textContent += '!' : console.error('Invalid HTML element');
};

addExclamationToPreviousHTMLElement(document.querySelector('#elem'));