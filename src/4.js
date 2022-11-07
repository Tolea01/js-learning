function sumInputNumbers() {
    let numbers = [];
    let sum = 0;

    while (true) {
        let value = prompt('Introduceti cifrele');

        if (value == '' || value == null || !Number(value)) break;
        numbers.push(+value);
    }

    numbers.map((element) => {
        sum += element
    })

    return sum;
}

alert(sumInputNumbers());