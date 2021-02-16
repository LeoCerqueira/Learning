// CHALLENGE 17
function makeFuncTester(arrOfTests) {
	return function innerFunc(callback) {
		for (let i = 0; i < arrOfTests.length; i++) {
			for (let j = 0; j < arrOfTests[i].length; j++) {
				if (arrOfTests[i][j + 1]) {
					if (callback(arrOfTests[i][j]) == arrOfTests[i][j+1]) {
						return true;
					} else {
						return false;
					}
				}
			}
		}
	};
}

/*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
