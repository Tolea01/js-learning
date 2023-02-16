const data = {
  "title": "8888888",
  "body": "688888",
  "execution_time": "5645"
};

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify(data),
})
.catch((err) => console.error(err));