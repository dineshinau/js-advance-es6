function findSmallest(arr) {
    if(!Array.isArray(arr)){
        return false;
    }
  if(arr.length<1){
    return null;
  }
  let s = arr[0];
  if(arr.length<2){
    return Number.isFinite(s) ? s : false;
  }
  for (let i in arr) {
    if (!Number.isFinite(arr[i])) {
      return false;
    }

    if (s > arr[i]) {
      s = arr[i];
    }
  }
  return Number.isFinite(s) ? s : false;
}

// module.exports = { findSmallest };

const input1 = [3,1,2];
const input2 = [-5,2,-3,4];
const input3 = [0,2,3];
const input4 = [];

console.log(findSmallest(input1)); //1
console.log(findSmallest(input2)); //-5
console.log(findSmallest(input3)); //0
console.log(findSmallest(input4)); // null



