document.querySelector('#start').addEventListener('click', () => {
    const interval = setInterval(() => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const seconds = new Date().getSeconds();

        hours < 10 ? hours = '0' + hours : hours;

        document.querySelector('#red').textContent = hours;
        document.querySelector('#green').textContent = ':' + minutes;
        document.querySelector('#blue').textContent = ':' + seconds;
    });

    document.querySelector('#stop').addEventListener('click', () => {
        clearInterval(interval);
    })
});