const weekDays = {
  "Luni": "Mo",
  "Marti": "Tu",
  "Miercuri": "We",
  "Joi": "Th",
  "Vineri": "Fr",
  "Sambata": "Sa",
  "Duminica": "Su",
}

const corectOrder = (obj) => {
  const result = {};
  Object.entries(obj).forEach(([key, value]) => result[value] = key);
  return result;
};

console.log(corectOrder(weekDays));