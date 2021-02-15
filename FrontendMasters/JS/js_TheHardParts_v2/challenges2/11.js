function dateStamp(func) {
	return function innerFunc(funcIn) {
		var newObj = {};

		var date = new Date().toLocaleDateString("pt-BR").split("/");

		newObj['date'] = date;
		newObj['output'] = func(funcIn);

		return newObj;
	};
}

/*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
