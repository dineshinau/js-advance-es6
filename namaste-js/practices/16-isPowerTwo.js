function isPowerOfTwo(n) {
    if(n<=0){ // Check if n is negative
        return false;
    }
    if ((n & (n - 1)) === 0) { // Check if n is a power of 2
        return true
    }
    return false;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(0)); // true
console.log(isPowerOfTwo(10)); // false
console.log(isPowerOfTwo(-4)); // false
console.log(isPowerOfTwo(4)); // true
