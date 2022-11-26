const array = [
    {
        x: 1,
        y: 2,
    },
    {
        x: 3,
        y: 4,
    },
    {
        x: null,
        y: 4,
    },
    {
        x: 3,
        y: undefined,
    },
];


const getCoordinates = (arr) => {
    // return arr.reduce((o, i) => {
    //     if (!o.find(v => v.x == i.x) && !o.find(v => v.y == i.y)) {
    //         o.push(i);
    //     }
    //     return o;
    // }, []);

    for (const elem of arr) {
        if (typeof elem.x != 'number' || typeof elem.y != 'number') {
            delete elem.x;
            delete elem.y;
        };
    };
    return arr.filter((elem) => Object.keys(elem).length != 0);
};

console.log(getCoordinates(array));