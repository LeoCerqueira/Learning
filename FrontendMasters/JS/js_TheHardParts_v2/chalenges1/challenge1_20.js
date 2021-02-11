function pipe(arrOfFuncs, value) {
	var result;

	for (let i = 0; i < arrOfFuncs.length; i++) {
		if (result) {
			value = result;
		}
		result = arrOfFuncs[i](value);
	}
	return result;
}

/*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
