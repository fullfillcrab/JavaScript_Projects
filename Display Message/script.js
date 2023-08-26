var messageInput = document.getElementById("message-input");

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}

messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getMessage();
  }
});
