let arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// 1-----------------------------------------------------------------------------
// arr.map((elem) => {
//     if(elem < 5) {
//         console.log(elem);
//     }
// })


// 2----------------------------------------------------------------------------
// let min = arr[0];
// let max = arr[0];

// for(let i in arr) {
//     if(arr[i] < min) {
//         min = arr[i];
//     }

//     if(arr[i] > min) {
//         max = arr[i];
//     }
// }

// console.log(arr.indexOf(min))


// 3-------------------------------------------------------------------------------
// for (let n = 0; n < arr.length; n++) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             const tempValue = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = tempValue;
//         }
//     }
// }
// console.log(arr);

// ------------------------------------------------------------------------------------------------------------
// console.log(arr.sort((a, b) => b - a))

// 4--------------------------------------------------------------------------------------------------------------
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// let arithmeticValue = sum / arr.length;

// arr.map((element) => {
//   if (element > arithmeticValue) {
//     console.log(element);
//   }
// })