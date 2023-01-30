const greetUser = () => {
  const username = prompt('Enter your name');

  alert(`Привет ${username}`);

  const question = confirm('Знаком с языком JavaScript?');

  const answer = question ? 'Молодец' : 'Можно начать изучение прямо сейчас';

  alert(answer);
};

greetUser();