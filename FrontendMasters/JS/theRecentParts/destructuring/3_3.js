// var {
//     a: {
//         b,
//         c
//     } = {
//         b:10,
//         c:20
//     }
// } = o1;

function data({ a, b, x } = {}) {
	//..
}

data({ a: 1, b: 2, x: 42 });
