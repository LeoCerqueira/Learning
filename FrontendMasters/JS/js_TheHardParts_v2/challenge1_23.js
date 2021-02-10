function myFunc(array, callback) {
	var found;

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			found = true;
			return i;
		}
	}

	if (!found) {
		return -1;
	}
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
	return num % 2 !== 0;
}

/*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1
