//ES6


var increment = (n) => {
	return n + 1;
};
var square = (n) => {
	return n * n;
};
var doMathSoIDontHaveTo = (n, func) => {
	return func(n);
};
console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(4, increment));
