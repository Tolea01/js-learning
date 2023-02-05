const input = document.getElementById('input');
const addButton = document.getElementById('add-button');
const taskContainer = document.getElementById('task-container');

const addTaskToContainer = (container) => {
  const taskContainerItem = document.createElement('div');
  taskContainerItem.classList.add('task-container-item', 'd-flex');

  const task = document.createElement('input');
  task.classList.add('form-control', 'border-none', 'shadow-none', 'disabledElement');
  task.type = 'text';
  task.value = input.value;

  const renameButton = document.createElement('i');
  renameButton.classList.add('fa-solid', 'fa-pen-to-square', 'mx-2', 'mt-2', 'cursor-pointer', 'fs-5');

  const removeButton = document.createElement('i');
  removeButton.classList.add('fa-solid', 'fa-circle-minus', 'text-danger', 'mt-2', 'cursor-pointer', 'fs-5');

  taskContainerItem.append(task, renameButton, removeButton);

  container.append(taskContainerItem);

  task.addEventListener('change', () => {
    task.value === '' ? task.parentNode.remove() : false;
  });

  task.addEventListener('change', () => {
    task.readOnly = true;
  });

  renameButton.addEventListener('click', () => {
    task.classList.remove('disabledElement')
    task.select();
    task.readOnly = false;
  });

  taskContainerItem.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-circle-minus')) {
      event.target.parentNode.remove();
    }
  });
};

const addTask = () => {
  if (!input.value) return;
  addTaskToContainer(taskContainer);
  input.value = '';
}

addButton.addEventListener('click', () => {
  addTask();
});

input.addEventListener('keyup', (event) => {
  event.key === 'Enter' ? addTask() : false;
});