function map(array, callback) {
	arr = [];
	for (let i = 0; i < array.length; i++) {
		arr.push(callback(array[i]));
	}

	return arr;
}

var family = ['Leo', 'Jú', 'Andre'];

// family.forEach(addMidleName);

function addMidleName(name) {
	var withMidle = name + ' Cerqueira';
	console.log(withMidle);
}

function map(array, callback) {
    var arr = [];
    
    arr.push(array.forEach(callback));

	return arr;
}

var result = map(family, addMidleName);



