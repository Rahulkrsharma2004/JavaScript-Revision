// forEach------------

// let numbers1 = [1, 2, 3, 4];

// numbers1.forEach(function (element) {
//   console.log(element);
// });


// Map-----------

// let numbers = [1, 2, 3, 4];

// let doubled = numbers.map(function (element) {
//   return element * 2;
// });

// console.log(typeof(numbers));
// console.log(typeof(doubled));



// Explain Hoisting in javascript. ---------------------

// hoistedVariable = 3;
// hoistedVariable = 4;
// console.log(hoistedVariable);
// {
//     host = 436456
//     console.log(host)
//     var host
// }


// hoistedFunction();
// function hoistedFunction(){
//     console.log(" Hello world! ");
// }


// What is the difference between slice and splice ---------------

// const array = [11,22,33,44,55,66,77];
// const slicedArray = array.slice(1, 4); 

// console.log(slicedArray); 
// console.log(array); 


// const array = [11, 21, 31, 41, 51];
// const removedElements = array.splice(1, 4, 6, 7, 8); //start and end  both index are including.

// console.log(removedElements); // first two element are like index and remove those element from those index.
// console.log(array); // orignal array modify

//type coirceon -------------

// var a = 23;
// var a = "Hello World!";
// var a = true
// console.log(a)


//this keyword ------------


// function doSomething() {
//     console.log(this);
//   }
  
//  doSomething(); if we have no object than this keyword refer to global object.


// var obj = {
//     name:  "vivek",
//     getName:function(){
//     console.log(this.name); //this keyword always refer to object.
//   }
// }

// obj.getName();



// var obj = {
//     name:  "vivek",
//     getName:function(){
//     console.log(this.name);
//   }
// }

// var getName = obj.getName;
// var obj2 = {name:"akshay", getName };
// obj2.getName();


// var obj1 = {
//     address : "Mumbai,India",
//     getAddress:function(){
//     console.log(this.address);
//   }
// }

// var getAddress = obj1.getAddress;
// var obj2 = {address:"akshay",getAddress};
// obj2.getAddress();

