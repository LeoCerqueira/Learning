function prioritize(array, callback) {
	var newArr = [];

	for (let index = 0; index < array.length; index++) {
		if (callback(array[index])) {
			newArr.unshift(array[index]);
		} else {
			newArr.push(array[index]);
		}
	}
	return newArr;
}

const startsWithS = function (str) {
	return str[0] === 's' || str[0] === 'S';
};
console.log(
	prioritize(
		['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
		startsWithS
	)
);
