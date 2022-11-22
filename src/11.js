let array = [
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
let result = array.map(elem => {
    return {
        name: elem.name,
        mark: elem.marks.reduce((prev, current) => prev + current) / elem.marks.length
    }
});

// console.log(result)
// ************************************************************************************************


// 2.******************************************************************************************
// let result2 = result.filter(item => item.mark < 5);
// console.log(result2);
// ************************************************************************************************


// 3.******************************************************************************************
// let max = result.reduce((prev, current) => {
//     if (prev.mark > current.mark) {
//         return prev
//     }
//     return current
// })

// let min = result.reduce((prev, current) => {
//     if (prev.mark < current.mark) {
//         return prev
//     }
//     return current
// })
// console.log('Max:', max);
// console.log('Min:', min);
// ************************************************************************************************


// 4.******************************************************************************************
// let result4 = result.sort((a, b) => b.mark - a.mark);
// console.log(result4);
// ************************************************************************************************


// 5.******************************************************************************************
// let studentsAverage = result.map(e => e.mark);
// let sum = studentsAverage.reduce((prev, current) => prev + current, 0);
// let classAverage = sum / studentsAverage.length;
// let result5 = result.find(elem => elem.mark > classAverage)
// console.log(result5);
// ************************************************************************************************