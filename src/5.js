let arr = [1, 2, 3, 4];

function convert(fn, array) {
    let newArr = [];
    array.map((elem) => {
        newArr.push(fn(elem));                                    /* ******************* */
    })
    return newArr
}

function square(x) {return x*x};
console.log(convert(square, arr));