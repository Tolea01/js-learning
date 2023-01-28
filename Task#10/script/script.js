const field = document.getElementById("field");
const ball = document.getElementById("ball");
const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;
const ballWidth = ball.offsetWidth;
const ballHeight = ball.offsetHeight;

field.style.position = 'relative';
ball.style.position = 'absolute';

const positionBall = (position) => {

  switch (position) {

    case 'center':
      ball.style.left = `${(fieldWidth / 2 - ballWidth / 2)}px`;
      ball.style.top = `${(fieldHeight / 2 - ballHeight / 2)}px`;
      break;

    case 'top-left':
      ball.style.left = '0px';
      ball.style.top = '0px';
      break;

    case 'top-right':
      ball.style.right = '0px';
      ball.style.top = '0px';
      break;

    case 'bottom-left':
      ball.style.left = '0px';
      ball.style.bottom = '0px';
      break;

    case 'bottom-right':
      ball.style.right = '0px';
      ball.style.bottom = '0px';
      break;

    default:
      console.error("Invalid position");
      break;

  }

};

positionBall('center');