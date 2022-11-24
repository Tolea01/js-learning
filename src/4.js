const sumInputNumbers = () => {
    const numbers = [];
    while (true) {
        const value = prompt('Introduceti cifrele');
        if (value == '' || value == null || !Number(value)) break;
        numbers.push(+value);
    }
    return numbers.reduce((prev, current) => prev + current, 0);
}

alert(sumInputNumbers());