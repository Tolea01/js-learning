document.body.style.cssText = 'display: flex; justify-content: center; padding-top: 150px';

document.body.appendChild(document.createElement('button'));

const button = document.querySelector('button');
button.textContent = 'Update data';

const data = {
  title: 88228,
  body: 123,
};


const updateTask = async (url, idData, data) => {
  const response = await fetch(`${url}/${idData}`, {
    method: 'PATCH',
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
  updateTask('http://localhost:3000/todos', 2,  data);
  // fetch('http://localhost:3000/todos', {
  //   method: 'PATCH',
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .catch((err) => console.error(err));
})