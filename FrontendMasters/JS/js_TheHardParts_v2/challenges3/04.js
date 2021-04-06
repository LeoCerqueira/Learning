/* CHALLENGE 4 */

function brokenRecord() {
	console.log('hi again, hello');

	setTimeout(brokenRecord, 1000);
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again
