let person1 = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com',
    },
    address: 'Moldova',

};


let person2 = {
    name: 'Person2',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com',
    },
    address: 'Moldova',
};

let result = {};

function Intersection(firstObject, secondObject) {
    for (let key in firstObject) {
        if (firstObject[key] == secondObject[key]) {
            result[key] = firstObject[key];
        }
    }
    return result;
};

console.log(Intersection(person1, person2));
// ****************************************************************************