const matrix = (num) => {

    const matrix = document.querySelector('.matrix');
    const out = document.querySelector('.out');
    matrix.textContent = `Matrix ${num}*${num}`;

    if (num == 10 || num == 1) {
        return;
    }

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            out.innerHTML += `${Math.floor(Math.random() * 10)} `;
        }
        out.innerHTML += '<br>';
    }

};

matrix(9);