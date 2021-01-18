var game = {};
game.murder = '??';
game['weapons'] = [
	{ type: 'lazers', location: 'lab' },
	{ type: 'angry cats', location: 'room' },
	{ type: 'dish soap', location: 'kichen' },
]; // declaring an porperty

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');

//console.log(game.weapons[0]);

var [first, last] = ['Leandro', 'Cerqueira'];
//console.log(first);

const { eu, voce } = { eu: 'leo', voce: 'ela' };
console.log(eu);
