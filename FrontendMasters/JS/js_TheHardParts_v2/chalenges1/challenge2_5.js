function map(arrays) {
	tempArr = [];

	arrays.forEach(function addTwo(input) {
		tempArr.push(input * 2);
	});

	return tempArr;
}

var numbers = [5, 2, 3];

console.log(map(numbers));
