const weekDays = {
  "Mo": "Понедельник",
  "Tu": "Вторник",
  "We": "Среда",
  "Th": "Четверг",
  "Fr": "Пятница",
  "Sa": "Суббота",
  "Su": "Воскресенье",
}

const translate = (obj) => {
  const days = Object.keys(obj);
  const romWeekDays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica',];
  const newObject = {};

  for (let keys in days) {
    newObject[days[keys]] = romWeekDays[keys];
  }

  console.log(newObject);
};

translate(weekDays);