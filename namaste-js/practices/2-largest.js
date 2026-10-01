function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length < 1) {
    return null;
  }
  let l = arr[0];
  if (arr.length < 2) {
    return (!Number.isFinite(l) ) ? false : l;
  }
  for (let i=0; i < arr.length; i++){
    if (!Number.isFinite(arr[i]) ) {
      return false;
    }
    if (l < arr[i]) {
      l = arr[i];
    }
  }
  return l;
}

const input1 = [3,1,2];
const input2 = [-5,2,-3,4];
const input3 = [0,2,3];
const input4 = [];

console.log(findLargest(input1)); // 3
console.log(findLargest(input2)); // 4
console.log(findLargest(input3)); // 3
console.log(findLargest(input4)); // null
