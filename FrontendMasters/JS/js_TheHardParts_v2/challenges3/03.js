/* CHALLENGE 3 */

function helloGoodbye() {
	function hello() {
		console.log('hello!');
	}

	function goodBye() {
		console.log('good bye!');
	}

	hello();
	setTimeout(goodBye, 2000);
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
