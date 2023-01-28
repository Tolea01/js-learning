const parentLeft = document.querySelector('#parent-left');
const parentRight = document.querySelector('#parent-right');
const child = document.querySelector('#child');

const ondragover = (event) => {
  event.preventDefault();
};

const ondrop = (event) => {
  event.target.appendChild(child);
};

parentRight.addEventListener('dragover', ondragover);
parentLeft.addEventListener('dragover', ondragover);
parentRight.addEventListener('drop', ondrop);
parentLeft.addEventListener('drop', ondrop);