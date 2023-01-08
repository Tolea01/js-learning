window.onload = () => {
   document.body.style.background = 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)';
}

setTimeout(() => {
   document.body.style.background = 'green';
}, 3000);

document.querySelector('#buttonOrange').addEventListener('click', () => {
   document.body.style.background = 'orange';
});

const addItem = () => {
   document.body.append(document.createElement('ol'));

   const list = document.querySelector('ol');
   const newItem = document.createElement('li');
   const itemNumber = list.children.length + 1;

   newItem.textContent = `Элемент ${itemNumber}`;

   if (itemNumber % 2 == 0) {
      newItem.style.backgroundColor = 'green';
   } else {
      newItem.style.backgroundColor = 'purple';
   }

   list.append(newItem);
}

setInterval(() => {
   document.body.append(document.createElement('ol'));

   const list = document.querySelector('ol');

   if (list.children.length >= 20) {
      return;
   }

   addItem();
}, 2000);