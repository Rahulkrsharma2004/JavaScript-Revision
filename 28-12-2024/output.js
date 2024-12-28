console.log([] + []);
// its give emapty string

var a = [1, 2, 3];
var b = a;
b.push(4);
console.log(a);

var foo = function() {
    return {
        bar: "hello"
    };
};
console.log(foo().bar);
