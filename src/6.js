// https://jsoneditoronline.org/#right=local.desote&left=cloud.deef3c924ef744fca466eac69b57ff75

const jsonObject = '[{"name":"John","surname":"Kennedy","patronymic":"Fitzgerald","date-of-birth":"12.12.1980","contacts":{"phone":"+37360583217","home-phone-number":"022398538","adress":"Balti","email":"kenedy1980@gmail.com"},"place-of-birth":"Balti","sex":"M","job":"driver","start-date":"14.12.2018","IDNP":"2005375938279","salary":"2000$","work-experience":"10 years","department":"drivers","work-schedule":{"from":"8:00","to":"17:00"}},{"name":"Dan","surname":"Smith","patronymic":"Martin","date-of-birth":"12.12.1981","contacts":{"phone":"+37360583247","home-phone-number":"022338538","adress":"California","email":"smith1981@gmail.com"},"place-of-birth":"California","sex":"M","job":"driver","start-date":"14.12.2019","IDNP":"2005373948279","salary":"1000$","work-experience":"5 years","department":"drivers","work-schedule":{"from":"8:00","to":"17:00"}},{"name":"Ivan","surname":"Evans","patronymic":"Joshua","date-of-birth":"12.12.1970","contacts":{"phone":"+37360093217","home-phone-number":"022018538","adress":"England","email":"ivan1970@gmail.com"},"place-of-birth":"England","sex":"M","job":"HR manager","start-date":"14.12.2015","IDNP":"2005379438279","salary":"2500$","work-experience":"12 years","department":"managers","work-schedule":{"from":"8:00","to":"17:00"}}]'

const employees = JSON.parse(jsonObject);

createTableData = (object) => {
  const td = document.createElement('td');
  td.textContent = object;
  tr.appendChild(td);
};

for (const key of employees) {
  const table = document.querySelector('#table-body');
  var tr = document.createElement('tr');
  tr.className = 'text-center';

  if (typeof key === 'object') {
    for (const objectkey of Object.values(key)) {
      if (typeof objectkey === 'object') {
        for (const objectKey2 of Object.values(objectkey)) {
          createTableData(objectKey2);
        }
      } else {
        createTableData(objectkey);
      }

    }

    table.appendChild(tr);
  }
}

const salary = employees.map((elem) => parseInt(elem.salary));
const salaries = salary.reduce((prev, current) => Math.round((prev + current)));
const average = Math.round(salaries / salary.length);
const minimumSalary = Math.min(...salary);
const maxSalary = Math.max(...salary);
const allSalaries = salary.reduce((prev, current) => prev + current);

const averageHTML = document.querySelector('.average').textContent = `Average salary for all employees: ${average}$`;
const minimumSalaryHTML = document.querySelector('.minimum-salary').textContent = `Minimum salary: ${minimumSalary}$`;
const maxSalaryHTML = document.querySelector('.max-salary').textContent = `Maximum salary: ${maxSalary}$`;
const allSalariesHTML = document.querySelector('.all-salaries').textContent = `Sum of all salaries: ${allSalaries}$`;