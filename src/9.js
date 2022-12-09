document.querySelector('.timer-button').addEventListener('click', () => {
    const inputDate = new Date(prompt('Introduceti anul.luna.data.ora:minute:secunde'));
    const startButton = setInterval(() => {
        const now = new Date();
        const interval = inputDate - now;
        const days = Math.floor(interval / 1000 / 60 / 60 / 24);
        const hours = Math.floor(interval / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(interval / 1000 / 60) % 60;
        const seconds = Math.floor(interval / 1000) % 60;

        if (interval <= 0) {
            clearInterval(startButton);
            alert('Время пришло');
        } else {
            document.querySelector('#days').textContent = days;
            document.querySelector('#hours').textContent = hours;
            document.querySelector('#minutes').textContent = minutes;
            document.querySelector('#seconds').textContent = seconds;
        }
    }, 1000);
});