const _ = {};

_.filter = function (arr, cb) {
	const storage = [];
	for (var i = 0; i < arr.lenght; i++) {
		if (cb(arr[i], i, arr) === true) {
			storage.push(arr[i]);
		}
	}
	return storage;
};

_.filter = function (arr, cb) {
	const storage = [];
	_.each(arr, function (item, i, list) {
		if (cb(item, i, list) === true) {
			storage.push(item);
		}
	});
	
	return storage;
};
