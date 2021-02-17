/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
	var intervalSec = interval * 1000;
	var durationSec = duration * 1000;

	const popUp = setInterval(func, intervalSec);

	setTimeout(() => {
		clearInterval(popUp);
	}, durationSec);
}
//Uncomment the following lines to check your work!
function theEnd() {
	console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
