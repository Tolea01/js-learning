const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}

let days = Object.keys(weekDays);
let translateRom = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica',];
let object = {};

for (let keys in days) {
    object[days[keys]] = translateRom[keys];
}

console.log(object);