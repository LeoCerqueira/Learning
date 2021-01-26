const ifElse = (condition, isTrue, isFalse, p, g) => {
	return condition ? isTrue(p) : isFalse(g);
};

const logTrue = (p) => {
	console.log(p);
};
const logFalse = (g) => {
	console.log(g);
};

ifElse(false, logTrue, logFalse, 'Leo', 'Leandro');
