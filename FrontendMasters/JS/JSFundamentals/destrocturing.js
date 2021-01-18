const obj = ({ name, weapon, room } = {
	name: 'Rusty',
	room: 'kitchen',
	weapon: 'candelstick',
});
console.log(name);
console.log(weapon);
console.log(obj);
console.log(obj.room);

var a = 1,
	b = 2;

console.log(a, b);
[b, a] = [a, b];
console.log(a, b);
