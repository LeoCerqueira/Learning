function saveOutput(func, magicWord) {
	let newObj = {};

	return function innerFunc(val) {
		if (val != 'boo') {
			console.log(func(val));

			newObj[val] = func(val);
		} else if (val == 'boo') {
			console.log(newObj);
		}
	};
}

/*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
	return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
multBy2AndLog(2); // => should log 4
multBy2AndLog(9); // => should log 18
multBy2AndLog('boo'); // => should log { 2: 4, 9: 18 }
