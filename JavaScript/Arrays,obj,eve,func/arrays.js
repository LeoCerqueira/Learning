// let arr = ['Leo', 'Leandro', 'Vera', 'Nadja'];

let arr = [];

arr.push('Leo'); //incluir no fim
arr.unshift('Leossa'); // incluir no começo
arr.unshift('ver'); // incluir no começo
arr.unshift('nadja'); // incluir no começo

let arr2 = [' eu', 'tu', 'ele'];

let result = arr.concat(arr2);

console.log(result)

// let result = arr.slice(0) // remove o ultimo
// console.log(result)

// arr.splice(1, 2 ) // posição, quantos quer remover, o que quer acrescentar
// console.log(arr);



arr.forEach((val, index) => {
	console.log(arr[index]);
	//arr.pop()
});

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// arr.forEach((val, index) => {
// 	console.log(val);
// });

// arr.forEach((val, index) => {
// 	if (index == 1) {
// 		arr[index] = '';
// 	}
// 	console.log(arr[index]);
// });
