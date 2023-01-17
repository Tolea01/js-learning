const startButton = document.querySelector('#timer-button');
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

const timer = () => {
    const inputDate = new Date(prompt('Introduceti anul.luna.data.ora:minute:secunde'));

    if (!inputDate || inputDate.toString() === "Invalid Date") {
        alert("Неверная дата ввода");
        return;
    }

    const timerInterval = setInterval(() => {
        const now = new Date();
        const interval = inputDate - now;

        if (interval <= 0) {
            clearInterval(timerInterval);
            alert('Время пришло');
        } else {
            const days = Math.floor(interval / 1000 / 60 / 60 / 24);
            const hours = Math.floor(interval / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(interval / 1000 / 60) % 60;
            const seconds = Math.floor(interval / 1000) % 60;

            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
        }
    }, 1000);
};

startButton.addEventListener('click', () => {
    timer();
});