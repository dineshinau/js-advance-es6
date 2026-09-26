// Closures in JavaScript. In Namaste JS, functions were defiend and x, y, but I used like this for
// better understanding. A closure is a function that has access to its own scope, the outer function's
// scope, and the global scope.
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }
    innerFunction();
}
outerFunction(); // Output: I am from the outer function

///////////////////////////

function z() {
    let a = 10;
    function x() {
        let b = 20;
        function y() {
            let c = 30;
            console.log(a, b, c); // Accessing variables from outer scopes
        }
        a = 100; // Modifying the outer variable
        y();
    }
    x();
}
z(); // Output: 100 20 30, the value of 'a' is modified to 100 before calling y(), so it keeps the reference to the variable 'a'
//  in the outer scope, and it reflects the updated value when accessed inside y().

