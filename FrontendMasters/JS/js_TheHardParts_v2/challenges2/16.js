// CHALLENGE 16
function average() {
	var counter = 0;
	var temp = 0;

	return function (num) {
		if (num) {
			counter++;
			temp = (temp + num) / counter;
			// console.log(num);
			// console.log(counter);
			console.log(temp);
		} else if (!num && temp) {
			console.log(temp);
		} else if (!temp && !num) {
			console.log('0');
		}
	};
}

/*** Uncomment these to check your work! ***/
const avgSoFar = average();
avgSoFar(); // => should log 0
avgSoFar(4); // => should log 4
avgSoFar(8); // => should log 6
avgSoFar(); // => should log 6
avgSoFar(12); // => should log 8
avgSoFar(); // => should log 8
