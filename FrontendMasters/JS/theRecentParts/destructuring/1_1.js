function data() {
	return [1, 2, 3, 4, 5];
}
//destructuring
var tmp;

[first, , second, third, ...fourth] = tmp = data() || [];

console.log(fourth);
