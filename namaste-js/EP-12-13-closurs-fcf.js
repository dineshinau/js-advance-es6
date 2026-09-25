// Function statment. It is hoisted to the top of the scope. So it can be called before its definition.
// It is also called function declaration.
a();
function a() {
   console.log("a called");
}

// Function expression.
var b = function() { // function without name is callled anonymous function expression.
    console.log("b called");
}
b();

// Function expression with name. It is also called named function expression.
var c = function xyz() {
    console.log("c called");
}
c();

// Arguments and parameters
function sum(a, b) { // a, b are parameters of the function sum. Parameters are variables that are used to pass values to a function.
    console.log(arguments); // arguments is an array like object which contains all the arguments passed to the function.
    return a + b;
}
var result = sum(1, 2); // 1 + 2 = 3, 1, 2 are also passed to the function. So arguments will contain all the values passed to the function.,
console.log(result);

// First class functions: Functions are first class citizens in JavaScript. It means that functions can be treated
// as values. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.
var d = function() {
    console.log("d called");
    return function() {
        console.log("e called");
    }
}
console.log(d());
