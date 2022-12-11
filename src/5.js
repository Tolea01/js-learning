const json = JSON.stringify({
    "name": "John",
    "surname": "Kennedy",
    "patronymic": "Fitzgerald",
    "date-of-birth": "12.12.1980",
    "contacts": {
        "phone": "+37360583217",
        "home-phone-number": "022398538",
        "adress": "Balti",
        "email": "kenedy1980@gmail.com"
    },
    "place-of-birth": "Balti",
    "gender": "M",
    "job": "driver",
    "start-date": "14.12.2018",
    "IDNP": "2005375938279",
    "salary": "2000$",
    "work-experience": "10 years",
    "department": "drivers",
    "work-schedule": {
        "from": "8:00",
        "to": "17:00"
    }
});

const person = JSON.parse(json);

document.querySelector('#name').textContent = `${person.name}`;
document.querySelector('#surname').textContent = `${person.surname}`;
document.querySelector('#patronymic').textContent = `${person.patronymic}`;
document.querySelector('#date-of-birth').textContent = `${person['date-of-birth']}`;
document.querySelector('#phone').textContent = `${person.contacts.phone}`;
document.querySelector('#home-phone-number').textContent = `${person.contacts['home-phone-number']}`;
document.querySelector('#adress').textContent = `${person.contacts.adress}`;
document.querySelector('#email').textContent = `${person.contacts.email}`;
document.querySelector('#place-of-birth').textContent = `${person['place-of-birth']}`;
document.querySelector('#gender').textContent = `${person.gender}`;
document.querySelector('#job').textContent = `${person.job}`;
document.querySelector('#start-date').textContent = `${person['start-date']}`;
document.querySelector('#IDNP').textContent = `${person.IDNP}`;
document.querySelector('#salary').textContent = `${person.salary}`;
document.querySelector('#work-experience').textContent = `${person['work-experience']}`;
document.querySelector('#department').textContent = `${person.department}`;
document.querySelector('#work-schedule').textContent = `${person['work-schedule'].from} - ${person['work-schedule'].to}`;