let counter = 0;
const arr = [1, 2, 3];

function increment() {
  counter++;
  console.log("Counter:", counter);
}

const [a, b, c] = arr;

setTimeout(() => {
  console.log("a:", a);
  increment();
  setTimeout(() => {
    console.log("b:", b);
    increment();
    setTimeout(() => {
      console.log("c:", c);
      increment();
    }, 1000);
  }, 2000);
}, 3000);
