const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const redElement = document.querySelector('#red');
const greenElement = document.querySelector('#green');
const blueElement = document.querySelector('#blue');

const timer = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  redElement.textContent = hours < 10 ? `0${hours}` : hours;
  greenElement.textContent = `:${minutes}`;
  blueElement.textContent = `:${seconds}`;
};

startButton.addEventListener('click', () => {
  let intervalId = setInterval(timer, 1000);

  stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
  });
});