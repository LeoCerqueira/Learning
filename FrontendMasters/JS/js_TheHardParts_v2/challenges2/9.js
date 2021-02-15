const { count } = require('console');

function cycleIterator(array) {
	var counter = 0;
	const maxValueIteration = array.length;

	return function innerFunc() {
		if (counter == maxValueIteration) {
			counter = 0;
		}

		console.log(array[counter]);
		counter++;
	};
}

/*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
getDay(); // => should log 'Fri'
getDay(); // => should log 'Sat'
getDay(); // => should log 'Sun'
getDay(); // => should log 'Fri'
