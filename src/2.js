const userRequest = () => {
  document.querySelector('#result').textContent = 'Waiting for response...';
  serverResponse()
    .then(response => document.querySelector('#result').textContent = 'Response from server')
    .catch(error => console.error(error));
};

const serverResponse = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })
};

userRequest();