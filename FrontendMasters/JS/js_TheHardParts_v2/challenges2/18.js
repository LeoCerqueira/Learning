// CHALLENGE 18
function makeHistory(limit) {
		var temArray = [];

	return function innerFunc(string) {
		if (temArray.length == 0 && string == 'undo') {
			console.log('nothing to undo');			

		} else if (temArray.length < limit && string != 'undo') {
			console.log(string, ' done');
			temArray.push(string);
		} else if (temArray.length == limit && string != 'undo') {
			console.log(string, ' done');
			temArray.shift();
			temArray.push(string);
		} else if (temArray.length > 0 && string == 'undo') {
			console.log(temArray[temArray.length - 1], ' undone');
			temArray.pop();
		}
	};
}

/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
myActions('jump'); // => should log 'jump done'
myActions('undo'); // => should log 'jump undone'
myActions('walk'); // => should log 'walk done'
myActions('code'); // => should log 'code done'
myActions('pose'); // => should log 'pose done'
myActions('undo'); // => should log 'pose undone'
myActions('undo'); // => should log 'code undone'
myActions('undo'); // => should log 'nothing to undo'
