// script.js
const kite = document.getElementById("kite");

let colors = [
  "linear-gradient(45deg, #FF0000, #FFFF00)",
  "linear-gradient(45deg, #00FF00, #0000FF)",
  "linear-gradient(45deg, #FF00FF, #00FFFF)",
];
let currentColorIndex = 0;

// Change kite color on click
kite.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  kite.style.background = colors[currentColorIndex];
});
