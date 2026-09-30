const number = 1;
const num1 = number;  // Copies the value of number to num1
console.log(num1); // 1

const person = {
	name : 'Dinesh'
}

const secondPerson = person; // Copies the pointer of person stored in Memory in secondPerson.

// person.name = 'Dinesh Yadav'
console.log(secondPerson);  // {name: 'Dinesh'}

const thirdPerson = { // Spread operator, it just a copy of person
	...person
}
person.name = 'Dinesh Yadav'
console.log(thirdPerson); // {name: 'Dinesh'}
