const field = document.getElementById("field");
const ball = document.getElementById("ball");
const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;
const ballWidth = ball.offsetWidth;
const ballHeight = ball.offsetHeight;

field.style.position = 'relative'
ball.style.position = 'absolute';

// center
ball.style.left = (fieldWidth / 2 - ballWidth / 2) + "px";
ball.style.top = (fieldHeight / 2 - ballHeight / 2) + "px";

// top-left
// ball.style.left = '0px';
// ball.style.top = '0px';

// top-right
// ball.style.right = '0px';
// ball.style.top = '0px';

// bottom-left
// ball.style.left = '0px';
// ball.style.bottom = '0px';

// bottom-right
// ball.style.right = '0px';
// ball.style.bottom = '0px';