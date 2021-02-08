const mainArr = [
	[5, 10, 15],
	[15, 88, 1, 5, 7],
	[100, 15, 10, 1, 5],
];

function union(arrays) {
	var tempArray = [];

	for (let i = 0; i < arrays.length; i++) {
		for (let j = 0; j < arrays[i].length; j++) {
			tempArray.push(arrays[i][j]);
		}
    }
    var finalArray = [...new Set(tempArray)]
    console.log(finalArray);
}

union(mainArr)
