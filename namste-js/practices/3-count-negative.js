function countNegatives(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length < 1) {
    return 0;
  }
  let n = 0;

  for (let i=0; i < arr.length; i++){
    if (!Number.isFinite(arr[i]) ) {
      return false;
    }
    if ( arr[i] < 0 ) {
      n++;
    }
  }
  return n;
}

const input1 = [-1,0,1];
const input2 = [-2,-5,-7];
const input3 = [0,2,3];
const input4 = [];

console.log(countNegatives(input1)); // 1
console.log(countNegatives(input2)); // 3
console.log(countNegatives(input3)); // 0
console.log(countNegatives(input4)); // 0
