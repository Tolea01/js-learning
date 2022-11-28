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
    return arr.filter((elem) => elem.x && elem.y);
};

console.log(getCoordinates(array));