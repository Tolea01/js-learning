const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const values = Object.values(salaries);
const result = values.reduce((prev, current) => prev + current, 0);

console.log(result);