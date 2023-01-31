const addYears = (date, year) => {
  return new Date(date.setFullYear(date.getFullYear() + year));
};

console.log(addYears(new Date(), 10).toString());