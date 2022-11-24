// username: JavaScript
// password: fundamentals
const username = prompt('Enter your username');
const password = prompt('Enter your password');

const message = username == 'JavaScript' && password == 'fundamentals' ? 'Привет' :
    username != 'JavaScript' && password != 'fundamentals' ? 'Ошибка Валидации' :
        password != 'fundamentals' ? 'Неправильный пароль' :
            'Неправильный username'
alert(message);