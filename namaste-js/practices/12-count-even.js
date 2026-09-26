function countEvens(arr) {
    if(!Array.isArray(arr)){
        return false;
    }
    if(arr.length < 1){
        return 0;
    }
    let count = 0;
    for(let i in arr){
        if(!Number.isFinite(arr[i])){
            return false;
        }
        if(arr[i]%2===0){
            count++;
        }
    }
    return count;
}


//For the purpose of user debugging.

const input1 = [1,2,3,4];
const input2 = [-2,-5,-8];
const input3 = [0,'a'];
const input4 = [];
const input5 ={}

const res1 = countEvens(input1)
const res2 = countEvens(input2)
const res3 = countEvens(input3)
const res4 = countEvens(input4)
const res5 = countEvens(input5)

console.log(res1); // Output: 1
console.log(res2); // Output: 1
console.log(res3); // Output: 0
console.log(res4); // Output: 3
console.log(res5); // Output: 4
