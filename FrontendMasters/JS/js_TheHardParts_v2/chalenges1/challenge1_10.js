function multiMap(array1, array2) {

    var obj = {};


	for (let i = 0; i < array1.length; i++) {

        obj[array1[i]]=  []


		for (let j = 0; j < array2.length; j++) {

            obj[array1[i]].push(array2[j](array1[i]))

            

        }
	}
    return obj;
}

console.log(
	multiMap(
		['catfood', 'glue', 'beer'],
		[
			function (str) {
				return str.toUpperCase();
			},
			function (str) {
				return str[0].toUpperCase() + str.slice(1).toLowerCase();
			},
			function (str) {
				return str + str;
			},
		]
	)
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
