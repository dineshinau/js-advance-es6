//Array Destructuring.
const [a,b] = ['Hello','Dinesh'];
console.log(a);
console.log(b);

const numbers = [1,2,3];
var  [num1, num2] = numbers;
console.log(num1); // 1
console.log(num2); // 2

var [num1, , num3] = numbers;
console.log(num1); //1
console.log(num3); //3

//Object destructuring
const {name, age} = {name: 'Dinesh', age: 32}
console.log(name); // Dinesh
console.log(age); // 28
