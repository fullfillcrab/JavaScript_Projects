document.addEventListener("DOMContentLoaded", function () {
  const display_Message = document.querySelector("#displayMessage");
  const increment = document.querySelector("#inc");
  const decrement = document.querySelector("#dec");
  const clear = document.querySelector("#clear");

  let count = 0;

  increment.addEventListener("click", function () {
    count++;
    display_Message.textContent = count;
  });

  decrement.addEventListener("click", function () {
    count--;
    display_Message.textContent = count;
  });

  clear.addEventListener("click", function () {
    count = 0;
    display_Message.textContent = 0;
  });
});
