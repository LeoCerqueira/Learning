// CHALLENGE 12
function censor() {
	var newObj = {};

	return function innerFunc(firstString, secondString) {
		if (secondString) {
			newObj[firstString] = secondString;
		} else {
			var newString;
			for (const key in newObj) {
				newString = firstString.replace(key, newObj[key]);
				firstString = newString;



			}
			return newString;

		}
	};
}

/*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogggggs', 'catts');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
