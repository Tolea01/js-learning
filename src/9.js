const showNotification = (option) => {
   const notification = document.createElement('div');

   notification.style.position = 'absolute';
   notification.style.top = option.top || '0px';
   notification.style.right = option.right || '0px';

   notification.textContent = option.message;

   if (option.className) {
      notification.className = option.className;
   }

   document.body.appendChild(notification);

   setTimeout(() => {
      document.body.removeChild(notification);
   }, 1500);

};


 showNotification({
   top: '10px', // 10px от верхней границы окна (по умолчанию 0px)
   right: '10px', // 10px от правого края окна (по умолчанию 0px)
   message: 'Hello!', // HTML-уведомление
   className: 'welcome' // дополнительный класс для div (необязательно)
 });
