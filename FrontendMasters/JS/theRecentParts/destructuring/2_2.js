// function data([
//     first = 10,
//     second = 20,
//     third = 30
// ]=[]){
//     // ...
// }

function data() {
	return { b: 2, c: 3 };
}

var tmp = data();
var first = tmp.a !== undefined ? tmp.a :42;
var second = tmp.b;
var third = tmp.c;
