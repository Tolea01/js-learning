document.body.style.cssText = 'display: flex; justify-content: center; padding-top: 150px';

document.body.appendChild(document.createElement('input'));

document.body.appendChild(document.createElement('button'));

const button = document.querySelector('button');
button.textContent = 'Delete data';

const input = document.querySelector('input');
input.setAttribute('placeholder', 'Enter task id')

const deleteData = async (url) => {
  const response = await fetch(`${url}/${input.value}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error('Server error');
  }

  alert('Data deleted successfully!');
};

button.addEventListener('click', () => {
  deleteData('http://localhost:3000/todos');
  // fetch('http://localhost:3000/todos', {
  //   method: 'DELETE',
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .catch((err) => console.error(err));
})