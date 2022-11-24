const arr = [1, 2, 3, 4];

const convert = (fn, array) => {
    const newArr = [];
    array.forEach((elem) => newArr.push(fn(elem)));
    return newArr;
}

function square(x) { return x * x };
console.log(convert(square, arr));