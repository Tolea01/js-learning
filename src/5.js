class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const student = new Student('Ivan', 'Ivanov', 2021);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());