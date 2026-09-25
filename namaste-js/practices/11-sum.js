// In case off array args is assed.
function sum(...args) {
    let res = 0;
    for (let i in args) {
        res += args[i];
    }
    return res;
}

//For the purpose of user debugging.

// const input1 = [1,2,3];
// const input2 = [10];
// const input3 = [];
// const input4 = [-5,5,10,20];
// const input5 = [100,200,300,400]

const res1 = sum(1,2,3)
const res2 = sum(10)
const res3 = sum()
const res4 = sum(-5,5,10,20)
const res5 = sum(100,200,300,400)

console.log(res1); // Output: 6
console.log(res2); // Output: 10
console.log(res3); // Output: 0
console.log(res4); // Output: 30
console.log(res5); // Output: 1000
