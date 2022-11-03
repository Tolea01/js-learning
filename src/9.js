let username = prompt('Enter your name');
alert('Привет' + ' ' + username);
let question = confirm('Знаком с языком JavaScript?');
if (question == true) {
    alert('Молодец');
}
else {
    alert('Можно начать изучение прямо сейчас');
}