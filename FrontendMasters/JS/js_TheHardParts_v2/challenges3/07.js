/* CHALLENGE 7 */

function delayCounter(target, wait) {
	var counter = 1;

	function count() {
		const showTarget = setInterval(() => {
			console.log(counter);
			counter++;
		}, wait);

		setTimeout(() => {

            clearInterval(showTarget)
            
        },(target*1000)+1000);
	}
	return count;
}

//UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3
