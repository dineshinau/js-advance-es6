function curry(fn) {
    // Your implementation
    return function curried(...args) {
        // Enough arguments collected: run the original function
        if(args.length >= fn.length){
            return fn.apply(this, args);
        }

        // Otherwise return a new function that collects more arguments
        return function (...nextArgs){
            return curried.apply(this, [...args, ...nextArgs])
        }
    }
}

//For the purpose of user debugging.
//pass appropriate input in below function call


function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(5));   // 8
console.log(curriedSum(1, 2)(8));   // 11
console.log(curriedSum(1)(2, 7));   // 10
console.log(curriedSum(1, 3, 3));   // 7

