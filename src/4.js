let person = {
    name: 'User1',
    age: 123,
}

let user2 = Object.assign({}, person);
user2.name = 'User2';
user2.age = 321;
console.log(person);
console.log(user2);