//Spread array
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5]; // spreading.
const newNumber = [numbers,4,5]; // array and numbers.
console.log(newNumbers);
console.log(newNumber);


//Spread object.
const person = {
	name : 'Dinesh'
}
const newPerson = {
	...person,
	age:28
}
console.log(newPerson);

//Rest operator
const filter = (...args) => {
	return args.filter(el => el === 1);
}
console.log(filter(1,2,3));