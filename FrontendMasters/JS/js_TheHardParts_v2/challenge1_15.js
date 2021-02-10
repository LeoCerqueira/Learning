function groupBy(array, callback) {
	var newObj = {};
	for (let index = 0; index < array.length; index++) {
		newObj[callback(array[index])] = [];
	}

    

	for (let index = 0; index < Object.keys(newObj).length; index++) {
		for (let j = 0; j < array.length; j++) {

            console.log(typeof(Number(Object.keys(newObj)[index])))

			if (Number(Object.keys(newObj)[index]) == Math.floor(Number([array[j]]))) {
				newObj[Object.keys(newObj)[index]].push(array[j]);
			}
		}
	}

	return newObj;
}

const decimals = [1.3, 2.1, 2.4,3.2,3.6,4.1];
const floored = function (num) {
	return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
