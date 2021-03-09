function data() {
	return [1, 2, 3, 4, 5];
}
//destructuring
var tmp = data();

var o = [];


[o[1], o[2], o[3], ...o[4]] = tmp ;

console.log(o[4]);
