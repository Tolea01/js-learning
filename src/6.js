function addElements (array, el1, el2, el3, el4) {
    array.splice(4, el1, el2, el3, el4);
    console.log(array);
}

addElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 0,0,0,0);