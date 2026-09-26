/**
 * This keyword
 *
 * this in global space
 *
 * console.log(this); //
 *
 * this inside a function
 *
 * this in script mode - (this substitution)
 *
 * this value depends on how this is called (window)
 *
 * this inside an object's method
 *
 * call apply bind methods (sharing methods)
 *
 * this inside arrow function
 *
 * this inside nested arrow function
 *
 * this inside DOM
 */

"use strict";

console.log(this); // window object

function x(){
    // the value depends on the strict / non - strict mode.
    console.log(this); // undefined in strict mode, and windonw in non-strict mode.
}
x();

function y(){
    console.log(this);
}
window.y();

///
const student = {
    name : 'Dinesh',
    printName: function() {
        console.log(this.name);
    }
}
student.printName();

const student2 = {
    name: "Gunjan"
}

student.printName.call(student2);

// In arrow functions, this retains the value of the enclosing lexical context's this
const emp = {
    Id: 1245,
    Name: "Dinesh Yadav",
    printDetails: () => {
        console.log(this); // window object
    }
}
emp.printDetails();

const emp1 = {
    Id: 1245,
    Name: "Dinesh Yadav",
    printDetails : function () {
        const showDetails = () => {
            console.log(this);
        }
        showDetails(); // Shows emp1 object, i.e. the enclosing lexical context's
    }
}
emp1.printDetails();
