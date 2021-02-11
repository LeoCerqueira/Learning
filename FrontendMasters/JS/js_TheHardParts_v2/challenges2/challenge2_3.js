function outer() {
	let counter = 0;

	// this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log('counter', counter);
	}
	return incrementCounter;
}

// const willCounter = outer();
// const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
	const addBy = (num) => {
		return num + x;
	};
	return addBy;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);

console.log(addByTwo(1),addByTwo(2),addByTwo(3))

// => should return 3
// => should return 4
// => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour)
addByFour(4); // => should return 8
console.log(addByFour(5)); // => should return 9
