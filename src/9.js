const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Sambata": "Sa",
    "Duminica": "Su",
}

function corectOrder(obj) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => result[value] = key);
    console.log(result);
}

corectOrder(weekDays);