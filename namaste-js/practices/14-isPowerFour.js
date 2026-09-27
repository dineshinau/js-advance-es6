function isPowerOfFour(n) {
    if(n<0){ // Check if n is negative
        return false;
    }
    if ((n & (n - 1)) !== 0) { // Check if n is a power of 2
        return false;
    }
    if(n%3===1){ // Check if n is of the form 4^k (i.e., n mod 3 should be 1)
        return true;
    }
    return false;
}

console.log(isPowerOfFour(1)); // true
console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(8)); // false
console.log(isPowerOfFour(0)); // false
console.log(isPowerOfFour(10)); // false
console.log(isPowerOfFour(-4)); // false
console.log(isPowerOfFour(4)); // false
