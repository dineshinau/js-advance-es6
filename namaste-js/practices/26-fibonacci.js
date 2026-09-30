function generateFibonacci(n) {
    let res = [];
    for (let i = 0; i < n; i++){
        if (i  < 2) {
            res.push(i);
        } else {
            res.push(res[i-1]+res[i-2])
        }
    }
    return res;
}

console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(15)); // [0, 1, 1, 2, 3]
