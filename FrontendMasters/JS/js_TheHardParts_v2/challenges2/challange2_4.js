function once(func) {
	let counter = 0;
	let finalValue;
	const innerFunc = (val) => {
		if (counter === 0)finalValue = func(val);
		counter++;
		return finalValue;
		
	};
	return innerFunc;
}

addByTwo = (x) => x + 2;

/*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
