function once(fn) {
  // Your code here ...
  let called = false;
  let result;
  return function (...args){
    if(!called){
        try{
            result = fn.apply(this, args)
            called=true;
        }
        catch(error){
            throw error
        }
    }
    return result;
  }
}

function add(a,b){
    return a+b;
}

const onceAdd = once(add)

//For the purpose of user debugging.
console.log(onceAdd(2,3)); // 5
console.log(onceAdd(4,5)); // 5
// console.log(findMaxNumber([-10, -20, -3, -1])); // -1
// console.log(findMaxNumber([42])); // 42
// console.log(findMaxNumber([])); // null
// console.log(findMaxNumber([100,100,100])); // 100

