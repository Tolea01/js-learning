const userRequest = () => {
  document.querySelector('#result').textContent = 'Waiting for response...';
  serverResponse()
    .then(response =>document.querySelector('#result').textContent = 'Response from server')
    .catch(error => console.log(error));
};

const serverResponse = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

userRequest();