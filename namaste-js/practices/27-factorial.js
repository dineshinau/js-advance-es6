function factorial(n) {
  // your solution here
  if (!Number.isFinite) {
    return false;
  }
  if (n === 0) {
    return 1
  }
  let res = 1;
  for (let i = n; i > 0; i--){
    res *=i
  }
  return res;
}

// console.log(factorial(5))
// console.log(factorial(4))


function fact(n) {
    return n < 2 ? 1 : n * fact(n-1)
}

console.log(factorial(5))
console.log(factorial(4))
