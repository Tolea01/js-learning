// https://jsoneditoronline.org/#left=cloud.11876c9373004f95bccd3b40a4efb8c6&right=local.wukafo

const jsonObject = '{"name":"John","surname":"Kennedy","patronymic":"Fitzgerald","date-of-birth":"12.12.1980","contacts":{"phone":"+37360583217","home-phone-number":"022398538","adress":"Balti","email":"kenedy1980@gmail.com"},"place-of-birth":"Balti","gender":"M","job":"driver","start-date":"14.12.2018","IDNP":"2005375938279","salary":"2000$","work-experience":"10 years","department":"drivers","work-schedule":{"from":"8:00","to":"17:00"}}';

const person = JSON.parse(jsonObject);

const displayEmployees = (person) => {
  for (const [key, value] of Object.entries(person)) {
    const element = document.querySelector(`#${key}`);

    if (element) {
      element.textContent = value;
    }
    if (typeof value === 'object') {
      displayEmployees(value);
    }
  }
};

displayEmployees(person);

document.querySelector('#work-schedule').textContent = `${person['work-schedule'].to} - ${person['work-schedule'].from}`;