const arr = [1, 2, 3, 4];

const convert = (fn, array) => {
    return array.map((elem) => fn(elem));
}

function square(x) { return x * x };
console.log(convert(square, arr));