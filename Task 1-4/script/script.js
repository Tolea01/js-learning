const changeElemBackgroundByClassName = (elem, classname) => {
  if (elem && classname) {
    elem.classList.add(classname);
  } else {
    console.error('HTMLElement or classname not provided');
  }
};

const addItem = () => {
  document.body.append(document.createElement('ol'));

  const list = document.querySelector('ol');
  const newItem = document.createElement('li');
  const itemNumber = list.children.length + 1;

  newItem.textContent = `Элемент ${itemNumber}`;

  if (itemNumber % 2 == 0) {
    changeElemBackgroundByClassName(newItem, 'background-color-green');
  } else {
    changeElemBackgroundByClassName(newItem, 'background-color-purple');
  }

  list.append(newItem);
};

window.onload = () => {
  changeElemBackgroundByClassName(document.body, 'background-red');

  setTimeout(() => {
    changeElemBackgroundByClassName(document.body, 'background-green');
  }, 3000);

  document.querySelector('#buttonOrange').addEventListener('click', () => {
    changeElemBackgroundByClassName(document.body, 'background-orange')
  });

  setInterval(() => {
    document.body.append(document.createElement('ol'));

    const list = document.querySelector('ol');

    if (list.children.length >= 20) {
      return;
    }

    addItem();
  }, 2000);
};