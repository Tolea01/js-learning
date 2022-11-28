const person = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: 112,
        email: 'email@domain.com',

        get phone() {
            return "phone is 112";
        },

        get email() {
            return "email@domain.com";
        }
    },
    adress: 'Moldova',

    get name() {
        return this.name;
    },

    get age() {
        return 123 * 2;
    },

    get salary() {
        return Math.ceil(Math.random() * 100);
    },

    get adress() {
        return 'adress is Moldova';
    }
}

console.log(person);
console.log(person.contacts.phone);
