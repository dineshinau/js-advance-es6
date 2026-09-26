// Let, const in temporal dead zone
// console.log(a); //Reference error: cannot access 'a' before initialization.

let a;
console.log(a); // undefined

// let a = 10; //SyntaxError: Identifier 'a' has already been declared

a= 10;
console.log(a); // 10

// const c; //sysntax error: missing initializer in const declaration
// c =1000;

const c = 1000;
console.log(c); // 1000

c= 2000; // TypeError: Assignment to constant variable.
