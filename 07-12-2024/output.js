console.log("1");

setTimeout(function () { //at last print
  console.log("2");
}, 0);

function test() {
  console.log("3");
}

test();

Promise.resolve().then(function () {
  console.log("4"); 
});

console.log("5");
