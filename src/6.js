// ***********************************************************************************************
function getCoordinates() {
    let array = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: null, y: 4 }, { x: 3, y: undefined }];

    for (let i = 0; i < array.length; i++) {
        if (array[i].x != Number(array[i].x) || typeof array[i].x == 'undefined') {
            delete array[i].x
        }

        if (array[i].y != Number(array[i].y) || typeof array[i].y == 'undefined') {
            delete array[i].y
        }
    }

    console.log(array);
}

getCoordinates();
// ***********************************************************************************************