function chunkArray(arr, n) {
    // Your implementation
    if (arr.length < 1) {
        return [];
    }
    if (n > arr.length) {
        return [arr];
    }
    let result = [];
    for (let i = 0; i < arr.length; i += n){
        result.push(arr.slice(i,i+n))
    }
    return result;

}

//For the purpose of user debugging.
//pass your array and chunk size in function call
console.log(chunkArray([1, 2, 3], 5));
