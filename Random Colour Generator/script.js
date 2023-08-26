document.body.onkeyup = function (e) {
  if (e.key == "" || e.code == "Space" || e.keycode == 32) {
    getNewColor();
  }
};

function getNewColor() {
  let symbols, color;
  symbols = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  document.getElementById("hex").innerHTML = color;
}