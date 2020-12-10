function range(start, end) {
	let array = [];
	let times = end - start;
	for (let i = 0; i <= times; i++) {
		array.push(start);
		start++;
	}
	return array;
}

console.log(range(3, 9));

function start3(number) {
    
    let start = 3;
	let array = [];
	let times = number - start;
	for (let i = 0; i <= times; i++) {
		array.push(start);
		start++;
	}
	return array;
	
}

console.log(start3(9))
