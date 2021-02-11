function highestFunc(objOfFuncs, subject) {
	var temp;
	var initial;
    var func;

	for (const key in objOfFuncs) {

        


		initial = objOfFuncs[Object.keys(objOfFuncs)[0]](subject);
		temp = objOfFuncs[key](subject);
        

		if (temp >= initial) {
			func = key;
            
		}
	}

	return func;
}

/*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
