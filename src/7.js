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

    get showName() {
        return this.name;
    },

    get calc() {
        return 123 * 2;
    },

    get randomNumbers() {
        return Math.ceil(Math.random() * 100);
    },

    get showAdress() {
        return this.adress;
    }
}

console.log(person);
console.log(person.showName);
