//transform lists

const game = {
	suspects: [
		{ name: 'Rusty', color: 'orange' },
		{ name: 'Scarlet', color: 'red' },
	],
};
//console.log(game['suspects']); // suspects need quotes here
console.log(game.suspects.length)

function foo() {
	for (let i = 0; i < game.suspects.length; i++) {
		console.log(game.suspects[i]);
	}
}

foo()

for (let suspect in game){
    console.log(game[suspect])
}

for ( let i = 0; i < game.suspects.length; i++){
    for(key in game.suspects[i]){
        if(game.suspects[i][key] == 'Rusty'){
            console.log('Found!')
            console.log(game.suspects[i][key])

        }else{
            console.log('Not this time!')
            console.log(game.suspects[i][key])

        }
    }
}