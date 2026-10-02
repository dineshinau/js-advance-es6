function isPowerOfThree(n) {
  // your solution here
  if ('number' !== typeof n || n < 1 || !Number.isInteger(n) ) {
    return false;
  }
  while(n%3 === 0){
    n=n/3
  }
  return n === 1
}

console.table(
    [1,9,0,10,81,63].map((x)=> ({fn: isPowerOfThree.name, input: x, result: isPowerOfThree(x)}))
)

