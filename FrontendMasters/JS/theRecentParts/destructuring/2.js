// function data(tmp = []) {
// 	ver[(first, second, third)] = tmp;
// }

function data() {
	return { a: 1, b: 2, c: 3 , d:4};
}

var { a: first = 42, b: second, ...third } = data();
