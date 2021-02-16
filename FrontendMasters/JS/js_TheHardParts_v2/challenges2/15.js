function russianRoulette(num) {
	var counter = 1;

	return function () {
		if (counter < num) {
			counter++;

			console.log('click');
		} else if (counter == num) {
			counter++;
			console.log('bang');
		} else {
			counter++;
			console.log('reload to play again');
		}
	};
}

/*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
play(); // => should log 'click'
play(); // => should log 'click'
play(); // => should log 'bang'
play(); // => should log 'reload to play again'
play(); // => should log 'reload to play again'
