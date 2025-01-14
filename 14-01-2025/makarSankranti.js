// script.js
const kite = document.getElementById("kite");
const string = document.getElementById("string");

let kiteHeight = 50; // Initial height

// Function to pull kite higher
function pullKiteHigher() {
  kiteHeight -= 10; // Reduce height
  kite.style.top = `${kiteHeight}%`;
  string.style.height = `${300 + kiteHeight}px`;
}

// Event Listener for clicking on the boy
document.querySelector(".boy").addEventListener("click", pullKiteHigher);
