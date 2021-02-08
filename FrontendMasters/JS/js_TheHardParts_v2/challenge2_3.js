function map(array, callback) {
	tempArr = [];

	for (let i = 0; i < array.length; i++) {
		tempArr.push(callback(array[i]));
	}
	return tempArr;
}

function addTwo(input) {
	return input * 2;
}
var numbers = [5, 2, 3];

console.log(map(numbers, addTwo));
