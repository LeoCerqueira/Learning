function rollCall(names) {
	return () => {
		if (!names.length) return console.log('Everyone accounted for');
		console.log(names.shift());
	};
}

/*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'
