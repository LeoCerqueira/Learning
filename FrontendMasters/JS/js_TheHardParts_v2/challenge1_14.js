function countBy(array, callback) {
	var newObj = {};
	var even = 0,
		odd = 0;


	for (let index = 0; index < array.length; index++) {
      

		if (callback(array[index]) === 'even') {
			even = even + 1;
			newObj[callback(array[index])] = even;
		} else {
			odd = odd + 1;
			newObj[callback(array[index])] = odd;
		}
	}

	return newObj;
}

// /*** Uncomment these to check your work! ***/
console.log(
	countBy([1, 2, 3, 4, 5], function (num) {
		if (num % 2 === 0) return 'even';
		else return 'odd';
	})
); // should log: { odd: 3, even: 2 }
