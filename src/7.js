const matrix = (num) => {
    
    const matrix = document.querySelector('.matrix');
    matrix.innerHTML = `Matrix ${num}*${num}`;

    const out = document.querySelector('.out');

    if (num == 10 || num == 1) {
        return;
    }

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            out.innerHTML += `${Math.floor(Math.random() * 10)} `;
        }
        out.innerHTML += '<br>';
    }

}

matrix(7);