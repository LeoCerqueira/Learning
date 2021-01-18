var suspects = [
	{ name: 'Leo', color: 'Black' },
	{ name: 'Ju', color: 'Blue' },
];

const [color1, color2] = [suspects[0].color, suspects[1].color];
console.log(color1);
console.log(color2);

var [{ color: firstColor }, { color: secondColor }] = suspects;
console.log(firstColor);
console.log(secondColor);