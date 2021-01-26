const object = {
	a: [{ j: 11 }, { k: 22 }, { n: 33 }],
	b: 2,
	c: 3,
	d: 4,
	k: 5,
	o: 6,
};

for (let j in object) {
	for (let i in j) {console.log(`${object[j][i]}`)};
}
