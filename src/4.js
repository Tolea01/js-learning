document.body.style.cssText = 'display: flex; justify-content: center; padding-top: 150px';

document.body.appendChild(document.createElement('input'));

document.body.appendChild(document.createElement('button'));

const button = document.querySelector('button');
button.textContent = 'Update data';

const input = document.querySelector('input');
input.setAttribute('placeholder', 'Enter task id')

const data = {
  title: 8888888,
  body: 688888,
  execution_time: 5645,
};


const updateTask = async (url, data) => {
  const response = await fetch(`${url}/${input.value}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error('Server error');
  }

  alert('The data has been modified successfully!');
};

button.addEventListener('click', () => {
  updateTask('http://localhost:3000/todos', data);
  // fetch('http://localhost:3000/todos', {
  //   method: 'PUT',
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .catch((err) => console.error(err));
})