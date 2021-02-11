const { start } = require('repl');

function combineOperations(startVal, arrOfFuncs) {
    var finalValue;


	for (let i = 0; i < arrOfFuncs.length; i++) {
		if (finalValue) {
			startVal = finalValue;
		}

		finalValue = arrOfFuncs[i](startVal);
	}
	return finalValue;
}

function add100(num) {
	return num + 100;
}

function divByFive(num) {
	return num / 5;
}

function multiplyByThree(num) {
	return num * 3;
}
function multiplyFive(num) {
	return num * 5;
}

function addTen(num) {
	return num + 10;
}

/*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10