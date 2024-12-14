// // 1.slice

// // const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// // const citrus = fruits.slice(1, 3); // ['Orange', 'Lemon']


// // 2. splice 

// // const months = ['Jan', 'March', 'April', 'June'];
// // months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
// and remove element 0 (1st place adding index and second place removing item and third place adding item at index)
// // console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

  
// 3.call

// // function greet() {
// //     return `Hello, ${this.name}`;
// //   }
// //   const person = { name: 'Alice' };
// //   console.log(greet.call(person)); // 'Hello, Alice'

  
// 4.apply

// //   function sum(a, b) {
// //     return a + b;
// //   }
// //   console.log(sum.apply(null, [1, 2])); // 3

  
// 5.bind

// //   const module = {
// //     x: 42,
// //     getX: function() {
// //       return this.x;
// //     }
// //   };
// //   const retrieveX = module.getX;
// //   const boundGetX = retrieveX.bind(module);
// //   console.log(boundGetX()); // 42

  
// 6.map

// //   const numbers = [1, 2, 3, 4];
// // const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]



// 7.filter

const words = ['spray', 'limit', 'elite', 'exuberant'];
const longWords = words.filter(word => word.length > 5); // ['exuberant']


// 8.reduce

const array = [1, 2, 3, 4];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10
console.log(sum);

// 9.forEach

// // const array = ['a', 'b', 'c'];
// // array.forEach(element => console.log(element));
// // // 'a'
// // // 'b'
// // // 'c'


// 10.some

// // const array = [1, 2, 3, 4, 5];
// // const even = array.some(element => element % 2 === 0); // true


// 11.every

// // const array = [1, 2, 3, 4, 5];
// // const allEven = array.every(element => element % 2 === 0); // false


// 12.find
 
// // const array = [5, 12, 8, 130, 44];
// // const found = array.find(element => element > 10); // 12


// 13.sort

// // const months = ['March', 'Jan', 'Feb', 'Dec'];
// // months.sort(); // ['Dec', 'Feb', 'Jan', 'March']

// const test = [21,3,4,5,33,15,100]
// const res = test.sort()
// console.log(res) // [100, 21, 3, 4, 5, 15, 33]

const test = [21,3,4,5,33,15,100]
const res = test.sort((a,b)=>a-b)
console.log(res) // [3, 4, 5, 15, 21, 33, 100]
