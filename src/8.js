// username: JavaScript
// password: fundamentals
let username = prompt('Enter your username');
let password = prompt('Enter your password');

if (username == 'JavaScript' && password == 'fundamentals') {
    alert('Привет');
}
else if (username != 'JavaScript' && password != 'fundamentals') {
    alert('Ошибка Валидации');
}
else if (password != 'fundamentals') {
    alert('Неправильный пароль')
}
else if (username != 'JavaScript') {
    alert('Неправильный username')
}