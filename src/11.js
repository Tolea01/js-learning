const array = [
    {
        name: 'student1',
        marks: [8, 10, 2, 5, 4],
    },

    {
        name: 'student2',
        marks: [8, 1, 6, 7, 4],
    },

    {
        name: 'student3',
        marks: [9, 6, 7, 5, 10],
    },

    {
        name: 'student4',
        marks: [8, 7, 5, 5, 4],
    },

    {
        name: 'student5',
        marks: [10, 10, 7, 9, 4],
    },
];

// 1.******************************************************************************************
const result = array.map((elem) => {
    return {
        name: elem.name,
        mark: elem.marks.reduce((prev, current) => prev + current) / elem.marks.length
    }
});

// console.log(result)
// ************************************************************************************************


// 2.******************************************************************************************
// const result2 = result.filter((item) => item.mark < 5);
// console.log(result2);
// ************************************************************************************************


// 3.******************************************************************************************
// const max = result.reduce((prev, current) => {
//     if (prev.mark > current.mark) {
//         return prev
//     };
//     return current;
// });

// const min = result.reduce((prev, current) => {
//     if (prev.mark < current.mark) {
//         return prev;
//     };
//     return current;
// });
// console.log('Max:', max);
// console.log('Min:', min);
// ************************************************************************************************


// 4.******************************************************************************************
// const result4 = result.sort((a, b) => b.mark - a.mark);
// console.log(result4);
// ************************************************************************************************


// 5.******************************************************************************************
// const studentsAverage = result.map((e) => e.mark);
// const sum = studentsAverage.reduce((prev, current) => prev + current, 0);
// const classAverage = sum / studentsAverage.length;
// const result5 = result.find(elem => elem.mark > classAverage);
// console.log(result5);
// ************************************************************************************************