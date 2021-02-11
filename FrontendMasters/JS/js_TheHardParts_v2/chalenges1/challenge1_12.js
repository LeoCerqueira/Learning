function majority(array, callback) {
	var notTrue = 0,
		odd = 0;

	for (let index = 0; index < array.length; index++) {
		if (callback(array[index])) {
			odd = odd + 1;
		} else {
			notTrue = notTrue + 1;
		}
	}

	

	if (odd > notTrue) {
		return true;
	} else {
		return false;
	}
}

const isOdd = function (num) {
	return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
