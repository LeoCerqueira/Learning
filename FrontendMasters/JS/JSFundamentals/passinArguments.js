var increment = function (n) {
	return n + 1;
};
var square = function (n) {
	return n * n;
};
var doMathSoIDontHaveTo = function (n, func) {
	return func(n);
};
var times = doMathSoIDontHaveTo(5, square);
var plus = doMathSoIDontHaveTo(4, increment);
console.log(times, plus);




