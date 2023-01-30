// const getMonthName = (date, month, year) => {
//     return new Date(year, month - 1, date).toLocaleString('en', { month: 'long' });
// };

// console.log(getMonthName(10, 10, 2009));


const getMonthName = (month) => {
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return monthList[month.getMonth()];
};

console.log(getMonthName(new Date("10/11/2009")));
console.log(getMonthName(new Date("11/13/2014")));