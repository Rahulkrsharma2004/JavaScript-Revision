// let counter = 0;
// const arr = [1, 2, 3];

// function increment() {
//   counter++;
//   console.log("Counter:", counter);
// }

// const [a, b, c] = arr;

// setTimeout(() => {
//   console.log("a:", a);
//   increment();
//   setTimeout(() => {
//     console.log("b:", b);
//     increment();
//     setTimeout(() => {
//       console.log("c:", c);
//       increment();
//     }, 1000);
//   }, 2000);
// }, 3000);

// let count = 0;
// const data = {
//   a: [1, 2, 3],
//   b: [4, 5, 6],
//   c: [7, 8, 9],
// };

// function increment() {
//   const [arr1, arr2, arr3] = Object.values(data);
//   setInterval(() => {
//     console.log(arr1[count], arr2[count], arr3[count]);
//     count++;
//   }, 1000);
// }

// increment();

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

const arr = [5, 6, [7, 8]];

let result = [];

const myFunc = ({ a, b }, [x, y, [z, w]], { c: { d, e } }) => {
  const temp = [a, b, x, y, z, w, d, e];
  result.push(temp);
};

myFunc(obj, arr, obj);
console.log(result);
