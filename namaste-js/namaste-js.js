function a() {
    console.log(b);
    c();
    function c() {
        b = 20;
        console.log(b);
    }
}
var b = 10;
a();
////////////////////////////////
//logging
//console.log(a1);
let a1 = 13;

var b1 = 14;

// const c;
// c=100;  // Uncaught SyntaxError: Missing initializer in const declaration (at namaste-js.js:18:7)

//const d=14;
//d=18; //Uncaught TypeError: Assignment to constant variable.

//console.log(y); //Uncaught ReferenceError: y is not defined

{
    var r = 10; // Global scope variable
    let s = 20; // block scope variable
    const t = 30; //block scope variable
    console.log(r, s, t);
}
console.log(r) // 10

//console.log(s); // Uncaught ReferenceError: s is not defined due to s is let and let is block scoped.

console.log('********** Shadowing ********');

let a2 = 5;
var b2 = 7;
{
    let a2 = 6;
    var b2 = 8;
    console.log(a2); // 6
    console.log(b2) // 8
}
console.log(a2); // 5
console.log(b2) // 8


console.log('********** Closurs ********');
function x() {
    var a = 7;
    return function y() {
        console.log(a); // 7
    }
    a=100;
    return y;
}
var z = x();
console.log(z);

//................................
z();

//..EP: 10................ Closure exmaples
console.log('Closure examples. EP 10');

function x1() {
    for(var i =1; i<6;i++){
        function close(x) {
            setTimeout(() => {
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
    console.log('Namste dev')
}
x1();

//....EP: 11............1... Clsure Interview Question
console.log('Closure examples. EP 11');

function outest() {
    var c11=20;
    function outer() {
        var b11=10;
        function inner() {
            // var a11=5;
            console.log(a11,b11,c11);
        }
        return inner;
    }
    return outer;
}
var a11=100;
var close = (outest())("Hello Word: ");
close(); // 5 10 20


//....EP: 11............2... Closure, used for data hiding/privacy (Encapsulation)
function counter() {
    var count = 0;
    return function() {
        count++;
        return count;
    }
}
var counter1 = counter();
console.log( 'Counter1: ' + counter1());
console.log( 'Counter1 again: ' + counter1());

//....EP: 11............3... Closure, used for data hiding/privacy (Encapsulation) Using construcutre
function Counter3() {
    var count = 0;
    this.incrementCounter = ()  =>{
        count++;
        return count;
    }

    this.decrementCounter = ()  =>{
        count--;
        return count;
    }
}
var counterObj = new Counter3();
console.log( 'Counter3 Incremenet: ' + counterObj.incrementCounter());
console.log( 'Counter3 Incremenet: ' + counterObj.incrementCounter());
console.log( 'Counter3 Decrement: ' + counterObj.decrementCounter());

//....EP: 11............4... Closure, Garbage Collection
function x4() {
    var a = 7; y=8
    return function y4() {
        console.log(a); // 7  // Y will be garbage collected because it is not used afer this line.
    }
}
x4()(); // 7
