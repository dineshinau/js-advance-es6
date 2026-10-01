function findMaxNumber(arr) {
    // Your implementation
    if (arr.length < 1) {
        return null;
    }
    let l = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (l < arr[i]) {
            l = arr[i]
        }
    }
    return l;
}


//For the purpose of user debugging.
console.log(findMaxNumber([1, 2, 3, 4, 5])); // 5
console.log(findMaxNumber([-10, -20, -3, -1])); // -1
console.log(findMaxNumber([42])); // 42
console.log(findMaxNumber([])); // null
console.log(findMaxNumber([100,100,100])); // 100

