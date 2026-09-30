function flattenArray(arr) {
   // console.log(arr);

    // Your implementation
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
     [] );
}

//For the purpose of user debugging.
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// console.log(flattenArray([['a'], ['b', ['c', 'd']],'e']));

function flattenArray1(arr){
    console.log(arr);

    let stack = [...arr];
    console.log(stack);

    let result = [];
    while (stack.length) {
        let next = stack.pop();
        console.log(next);

        if(Array.isArray(next)){
            stack.push(...next)
        }else{
            result.unshift(next)
        }
    }
    return result;
}

console.log(flattenArray1([1, [2, [3, 4], 5], 6]));
console.log(flattenArray1([['a'], ['b', ['c', 'd']],'e']));
