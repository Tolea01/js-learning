class Validator {

  static isEmail(str) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(str);
  }

  static isDomain(str) {
    const domenRegex = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})$/;
    return domenRegex.test(str);
  }

  static isDate(str) {
    const dataRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    return dataRegex.test(str);
  }

  static isPhone(str) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(str);
  }
}

console.log(Validator.isEmail('phphtml@mail.ru'));
console.log(Validator.isDate('12.05.2020'));
console.log(Validator.isDomain('exampleDomain.com'));
console.log(Validator.isPhone('060535543'));