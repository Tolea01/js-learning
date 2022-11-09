let array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

function uniqueSorted() {
    let sort = array.sort((a, b) => { return a - b });
    let unique = Array.from(new Set(array));
    return sort, unique;

}

console.log(uniqueSorted());