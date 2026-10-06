Array.prototype.myReduce = function(callback, initialValue) {
    if (this == null) {
        throw new TypeError('Array.prototype.myReduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const arr = Object(this);
    const len = arr.length >>> 0;
    let i = 0;
    let accumulator;

    if (arguments.length >= 2) {
        accumulator = initialValue;
    } else {
        while (i < len && !(i in arr)) i++;   // skip holes
        if (i >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = arr[i++];
    }

    for (; i < len; i++) {
        if (i in arr) {                        // skip holes in sparse arrays
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }
    return accumulator;
};

console.log([1, 2, 3].myReduce((acc, val) => acc + val));      // 6
console.log([1, 2, 3].myReduce((acc, val) => acc + val, 10));  // 16
console.log([].myReduce((acc, val) => acc + val, 5));  // 5
console.log([].myReduce((acc, val) => acc + val));  // error
