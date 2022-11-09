const colors = ['red', 'green', 'blue',];

// function checkColor(color) {

//     for (let elem in colors) {
//         if (colors[elem] == color) {                                /* ********************************* */
//             console.log(colors.indexOf(color));
//         }
//         // else{
//         //     console.log(-1);
//         // }
//     }

// }

// checkColor('green');

function checkColor(color) {
    let result = colors.findIndex((elem) => {
        if (elem == color) {
            return elem;
        }
    })

    console.log(result);
}

checkColor('green');