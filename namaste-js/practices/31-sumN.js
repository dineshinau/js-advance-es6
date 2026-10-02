function sumN(n) {
  // your solution here
  if ('number' !== typeof n || n < 0 || !Number.isInteger(n) ) {
    return false;
  }
  console.log(n);

  return n === 0 ? 0 : n + sumN(n-1)
}

//For the purpose of user debugging.
console.log(sumN(2)); // 3
// console.log(sumN(5)); // 15
// console.log(sumN(0)); // 0
// console.log(sumN(10)); // 55
// console.log(sumN(-1)); // false
// console.log(sumN(1.5)); // false
