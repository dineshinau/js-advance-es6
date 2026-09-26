//Spread array
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5]; // spreading.
const newNumber = [numbers,4,5]; // array and numbers.
console.log(newNumbers); // 1,2,3,4,5
console.log(newNumber); //[[1,2,3],4,5]


//Spread object.
const person = {
	name : 'Dinesh'
}
const newPerson = {
	...person,
	age:28
}
console.log(newPerson); // {name: 'Dinesh', age: 28}

//Rest operator
const filter = (...args) => {
	return args.filter(el => el === 1);
}
console.log(filter(1,2,3)); // [1]
