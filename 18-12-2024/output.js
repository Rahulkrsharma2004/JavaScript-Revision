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

// const obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: 4,
//   },
// };

// const arr = [5, 6, [7, 8]];

// let result = [];

// const myFunc = ({ a, b }, [x, y, [z, w]], { c: { d, e } }) => {
//   const temp = [a, b, x, y, z, w, d, e];
//   result.push(temp);
// };

// myFunc(obj, arr, obj);
// console.log(result);

// const promise1 = Promise.resolve("One");
// console.log(promise1);
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Two"), 1000)
// );
// const promise3 = Promise.reject("Three");
// Promise.allSettled([promise1, promise2, promise3]).then((results) =>
//   console.log(results)
// );

// class Bird {
//     constructor(name) {
//     this.name = name;
//     }
//     speak() {
//     console.log(`${this.name} makes a noise.`);
//     }
// }
// class Crow extends Bird{
//     speak() {
//     super.speak();
//     console.log(`${this.name} sings.`);
//     }
// }
// const crow = new Crow("Tim");
// crow.speak();

// let x = 0;
// function increment() {
//   x++;
//   console.log(x);
//   if (x < 3) {
//     let x = 0;
//     increment();
//   }
// }
// increment();

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// let a = 1;
// function foo() {
//   let a = 2;
//   console.log(a, "first a");
//   function bar() {
//     let a = 3;
//     console.log(a);
//     console.log(a);
//   }
//   bar();
// }
// foo();
// console.log(a);


// var a = 1;
// (function() {
//   console.log(a);
//   var a = 2;
//   console.log(a);
// })();
// console.log(a);

const arr = [1, 2, 3];
const [a, ...rest] = arr;
console.log(a, rest);