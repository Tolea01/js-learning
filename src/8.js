const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}

const days = Object.keys(weekDays);
const translateRom = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica',];
const object = {};

for (let keys in days) {
    object[days[keys]] = translateRom[keys];
}

console.log(object);