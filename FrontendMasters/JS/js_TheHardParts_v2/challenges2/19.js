// CHALLENGE 19
function blackjack(array) {
	var counter = 0;
	var sum;
	var done;

	function dealer(num1, num2) {
		function innerFunc() {
			counter++;
			return (sum = num1 + num2);
		}
		
		 if (counter > 0 && sum + array[counter - 1] <= 21) {
			sum = sum + array[counter - 1];
			counter++;
			return sum;
		} else if (sum + array[counter - 1] > 21) {
			done = true;
			console.log('bust');
		} else if (done) {
			console.log('you are done!');
		}
		return innerFunc;
	}

	return dealer;
}

/*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([
	2,
	6,
	1,
	7,
	11,
	4,
	6,
	3,
	9,
	8,
	9,
	3,
	10,
	4,
	5,
	3,
	7,
	4,
	9,
	6,
	10,
	11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
