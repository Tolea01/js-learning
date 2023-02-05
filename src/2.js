const input = document.querySelector('#input');
const addButton = document.querySelector('#add-button');
const taskContainer = document.querySelector('#task-container');
const NumberOfTasks = document.querySelector('.number-of-tasks');

const calculateTaskCount = () => {
  if (taskContainer.childNodes.length > 1) {
    NumberOfTasks.textContent = `${taskContainer.childNodes.length} tasks`
  } else {
    NumberOfTasks.textContent = `${taskContainer.childNodes.length} task`;
  }
};

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
    calculateTaskCount();
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
    calculateTaskCount();
  });
};

const displayTasks = () => {
  if (!input.value) return;

  addTaskToContainer(taskContainer);

  input.value = '';

  calculateTaskCount();
};

addButton.addEventListener('click', () => {
  displayTasks();
});

input.addEventListener('keyup', (event) => {
  event.key === 'Enter' ? displayTasks() : false;
});