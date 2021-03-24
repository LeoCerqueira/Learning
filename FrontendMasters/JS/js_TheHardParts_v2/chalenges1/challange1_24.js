// Challenge 24
function myForEach(array, callback) {
	var finalValue;
	for (let i = 0; i < array.length; i++) {
		finalValue = callback(array[i]);
	}
	return finalValue;
}

var sum = 0;

function addToSum(num) {
	sum += num;
}

/*** Uncomment these to check your work! ***/
const nums = [1, 2, 3, 4];
myForEach(nums, addToSum);
console.log(sum); // Should output 6
