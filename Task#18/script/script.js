const player = document.querySelector('#player');
const player2 = document.querySelector('#player2');
const viewport = document.querySelector('#viewport');

const movePlayerWithKeyboard = (event) => {

  switch (event.key) {

    case 'ArrowUp':
      player.style.top = player.offsetTop - 10 + "px";
      break;

    case 'ArrowDown':
      player.style.top = player.offsetTop + 10 + "px";
      break;

    case 'ArrowLeft':
      player.style.left = player.offsetLeft - 10 + "px";
      break;

    case 'ArrowRight':
      player.style.left = player.offsetLeft + 10 + "px";
      break;

    default:
      break;

  }

};

const movePlayer2WithKeyboard = (event) => {

  switch (event.key) {

    case 'ArrowUp':
      player2.offsetTop > viewport.offsetTop ? player2.style.top = player2.offsetTop - 10 + "px" : null;
      break;

    case 'ArrowDown':
      player2.offsetTop < viewport.offsetHeight - player2.offsetHeight ? player2.style.top = player2.offsetTop + 10 + "px" : null;
      break;

    case 'ArrowLeft':
      player2.offsetLeft > viewport.offsetLeft ? player2.style.left = player2.offsetLeft - 10 + "px" : null;
      break;

    case 'ArrowRight':
      player2.offsetLeft < viewport.offsetWidth - player2.offsetWidth ? player2.style.left = player2.offsetLeft + 10 + "px" : null;
      break;

    default:
      break;

  }

};

// document.addEventListener('keydown', (event) => {
//   movePlayerWithKeyboard(event);
// });

document.addEventListener('keydown', (event) => {
  movePlayer2WithKeyboard(event);
});