const person1 = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com',
    },
    address: 'Moldova',

};


const person2 = {
    name: 'Person2',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com',
    },
    address: 'Moldova',
};

const Intersection = (firstObject, secondObject) => {
    let result = {};
    for (let key in firstObject) {
        if (firstObject[key] == secondObject[key]) {
            result[key] = firstObject[key];
        };
    };
    return result;
};

console.log(Intersection(person1, person2));