function objOfMatches(array1, array2, callback) {
	callback(array1, array2);
}

function newObj(arr1, arr2) {
	var obj = {};

	for (let i = 0; i < arr1.length; i++) {
		obj.key() = arr1;
		obj.value() = arr2;
	}
	return obj;
}

console.log(
	objOfMatches(
		['hi', 'howdy', 'bye', 'later', 'hello'],
		['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
		newObj
	)
);
