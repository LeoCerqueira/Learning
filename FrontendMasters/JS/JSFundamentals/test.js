// const test = {
// 	family: [
// 		{ name: 'Léo', age: '29' },
// 		{ name: 'Jú', age: '30' },
// 		{ name: 'André', age: '32' },
// 	],
// 	work: [{ person1: 'radom1' }, { person1: 'radom1' }, { person1: 'radom1' }],
// };

// //console.log(test.work.length)

// for( let i = 0 ; i<test.family.length; i++){


// 	for(let key in test.family[i]){
// 		console.log(test.family[i])
// 	}
// }

var obj = { // does not create a new scope
	i: 10,
	b: () => console.log(this.i, this),
	c: function() {
	  console.log(this.i, this);
	}
  }

console.log(obj.c())