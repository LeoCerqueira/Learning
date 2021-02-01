const numbers = [1, 2, 3, 4, 5, 6];
function reduce(data, callback, initial) {
	var finalValue = initial;

	for (let i = 0; i < data.length; i++) {
		finalValue = callback(finalValue, data[i]);
	}

	console.log(finalValue);
}
function add(a, b) {
	return a + b;
}

reduce(numbers, add, 0)