// setTimeout closure example
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    setTimeout(function() {
        console.log(outerVariable); // Accessing outerVariable from the outer function after a delay after 2000 milliseconds
    }, 2000);
    console.log("outerVariable is set to: " + outerVariable);
}
outerFunction(); // Output after 2 seconds: I am from the outer function

//////// Now we to print 1,2,3,4,5 with setTimeout after each seconds

function x(){
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i); // This will print 6 five times because 'i' is not block scoped and the loop has completed
            // by the time the timeout functions execute
        }, i * 1000);
    }
    console.log("Loop has completed, i is now: " + i);
}
// x(); // Output after 1 second: 6, after 2 seconds: 6, after 3 seconds: 6, after 4 seconds: 6, after 5 seconds: 6

// To fix the above issue, we can use let instead of var to create a block-scoped variable

function y(){
    for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i); // This will print 1, 2, 3, 4, 5 because 'i' is block scoped and retains its value for each iteration
        }, i * 1000);
    }
    console.log("Loop has completed"); // This will print immediately after the loop completes, before any of the setTimeout callbacks execute
}
wy();
