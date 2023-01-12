const player = document.querySelector('#player');
const player2 = document.querySelector('#player2');
const viewport = document.querySelector('#viewport');

// document.addEventListener("keydown", (event) => {
//    if (event.key === "ArrowUp") {
//       player.style.top = player.offsetTop - 10 + "px";
//    } else if (event.key === "ArrowDown") {
//       player.style.top = player.offsetTop + 10 + "px";
//    } else if (event.key === "ArrowLeft") {
//       player.style.left = player.offsetLeft - 10 + "px";
//    } else if (event.key === "ArrowRight") {
//       player.style.left = player.offsetLeft + 10 + "px";
//    }
// });


document.addEventListener("keydown", (event) => {
   if (event.key === "ArrowUp") {
      if (player2.offsetTop > viewport.offsetTop) {
         player2.style.top = player2.offsetTop - 10 + "px";
      }
   } else if (event.key === "ArrowDown") {
      if (player2.offsetTop < viewport.offsetHeight - player2.offsetHeight) {
         player2.style.top = player2.offsetTop + 10 + "px";
      }
   } else if (event.key === "ArrowLeft") {
      if (player2.offsetLeft > viewport.offsetLeft) {
         player2.style.left = player2.offsetLeft - 10 + "px";
      }
   } else if (event.key === "ArrowRight") {
      if (player2.offsetLeft < viewport.offsetWidth - player2.offsetWidth) {
         player2.style.left = player2.offsetLeft + 10 + "px";
      }
   }
});







