//Chain Scope ------------------

// var y = 24;
// function favFunction(){

// var x = 667;
// var anotherFavFunction = function(){
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }

// var yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }

//   anotherFavFunction();
//   yetAnotherFavFunction();
// }
// favFunction();

//Memoization -----------------------

// function addTo256(num) {
//   console.log(num + 256);
// }
// addTo256(20); // Returns 276
// addTo256(40); // Returns 296
// addTo256(20); // Returns 276


function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    if (num in cache) {
      console.log(cache[num]);
    } else {
      cache[num] = num + 256;
      console.log(cache[num]) ;
    }
  };
}

var memoizedFunc = memoizedAddTo256();
memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return


const book = () => {
    console.log("I'm reading a book");
}