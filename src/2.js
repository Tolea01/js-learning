const parentLeft = document.querySelector('#parent-left');
const parentRight = document.querySelector('#parent-right');
const child = document.querySelector('#child');

const ondragover = (event) => {
   event.preventDefault();
};

const ondrop = (event) => {
   event.target.appendChild(child);
};

parentRight.ondragover = ondragover;

parentLeft.ondragover = ondragover;

parentRight.ondrop = ondrop;

parentLeft.ondrop = ondrop;