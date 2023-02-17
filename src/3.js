document.body.style.cssText = 'display: flex; justify-content: center';

document.body.appendChild(document.createElement('button'));

const button = document.querySelector('button');
button.textContent = 'Send data';
button.style.marginTop = '150px';

const data = {
  title: 8888888,
  body: 688888,
  execution_time: 5645,
};


const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error('Server error');
  }

  alert('The data has been sent to the server!');
};

button.addEventListener('click', () => {
  sendData('http://localhost:3000/todos', data);
  // fetch('http://localhost:3000/todos', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .catch((err) => console.error(err));
})