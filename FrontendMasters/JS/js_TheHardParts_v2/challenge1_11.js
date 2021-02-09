function objectFilter(obj, callback) {
	var newObj = {};

    

	for (places in obj) {
        if (callback(places) === obj[places]) {
            newObj[places] = callback(places);
          }

          console.log(places)
	}

	return newObj;
}

const cities = {
	London: 'LONDON',
	LA: 'Los Angeles',
	Paris: 'PARIS',
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

// Should log { London: 'LONDON', Paris: 'PARIS'}
