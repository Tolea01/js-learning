let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function extract(start, end) {
    return console.log(array.splice(start, end - 1));
}

extract(2, 4);