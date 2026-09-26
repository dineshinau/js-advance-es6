// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code.
getName(); // Namaste JavaScript
console.log(x); // undefined

console.log(getName); // [Function: getName]
console.log(getName1); // [Function: getName1]
console.log(getName2); // [Function: getName2]

var x = 7;
function getName() { // In case of function declaration, it is hoisted. It is treated as a function and will be hoisted to the top of the scope.
    console.log("Namste JavaScript");
}

var getName1 = () => { // In case of arrow function, it is not hoisted. It is treated as a variable and will be hoisted as undefined.
    console.log("Namste JavaScript");
}
var getName2 = function() { // In case of function expression, it is not hoisted. It is treated as a variable and will be hoisted as undefined.
    console.log("Namste JavaScript");
}
