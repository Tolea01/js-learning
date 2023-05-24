class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  setSurname(newSurname) {
    this.surname = newSurname;
    return 'Ivanov';
  }
}

const worker = new Person('Ivan', 'Ivanov');

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.setSurname('Petrov'));
console.log(worker.getSurname());