// map
let arr = [2,3,5,8];

const double = (x) => x *2;

console.log(arr.map(double));
console.log(arr.map((x) => x.toString(2)));

// filter
const even = arr.filter((x) => x%2===0);
console.log(even);

//reduce
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Complex examples

const users = [
    {firstName: "Dinesh", lastName: "yadav", age: 37},
    {firstName: "Gunjan", lastName: "yadav", age: 30},
    {firstName: "Ditya", lastName: "yadav", age: 3},
    {firstName: "Anaya", lastName: "Gupta", age: 3},
];

// Find full names
const output = users.map((x) => x.firstName + ' '+ x.lastName);
console.log(output);

// Find equal age counts
const equal = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(equal);

