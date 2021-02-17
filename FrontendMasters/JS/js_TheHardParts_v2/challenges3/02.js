/* CHALLENGE 2 */

function delayedGreet() {
	function greet() {
		console.log('welcome');
	}

	setTimeout(greet, 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome
