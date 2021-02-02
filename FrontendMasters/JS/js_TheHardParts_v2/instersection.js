// function instersection(arrays){
//     for(let i = 0; i<arrays.length ; i++){
//         for(let j = 0; j<arrays.arrays[i] ; j++)
//             if(arrays[i][j] == arrays[i+1])

//     }

// }
const arrays = [
	[5, 10, 15, 20, 27, 40],
	[15, 88, 1, 5, 7],
	[1, 10, 15, 5, 20],
];

function comparison(arrays) {
	var tempArr = [];

	var finalArray = [];

	for (let i = 0; i < arrays.length; i++) {
		for (let j = 0; j < arrays[i].length; j++) {
			tempArr.push(arrays[i][j]);
		}
	}

	for (var k = 0; k < tempArr.length; k++) {
		var atualNumber = tempArr[k];
		var counter = 0;

		for (let m = 0; m < tempArr.length; m++) {
			if (atualNumber == tempArr[m]) {
				counter = counter + 1;
			}
			if (counter == arrays.length) {
				finalArray.push(atualNumber);
			}
		}
	}
	var newArr = [...new Set(finalArray)];
	return newArr;
}

console.log(comparison(arrays));
