let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (obj[key] == Number(obj[key])) {     /* typeof obj[key] == 'number' */
            obj[key] *= 2;
        }
    }

    console.log(obj);
}

multiplyNumeric(menu);