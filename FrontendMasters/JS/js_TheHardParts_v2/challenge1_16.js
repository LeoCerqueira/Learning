

function goodKeys(obj, callback) {
	var newArr = [];

	for (var key in obj) {

        console.log(obj[key])
		if (callback(obj[key])) {
			newArr.push(key);
		}
	}
    return newArr;
}

const sunny = {
	mac: 'priest',
	dennis: 'calculating',
	charlie: 'birdlaw',
	dee: 'bird',
	frank: 'warthog',
};
const startsWithBird = function (str) {
	return str.slice(0, 4).toLowerCase() === 'bird';
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
