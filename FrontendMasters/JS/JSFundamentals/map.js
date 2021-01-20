const weapons = [ 'candelstick', ' lead pipe', 'revolver']
const makeBroken = function(item){
    return `broken ${item}`;
};

var brokenWeapons = weapons.map(makeBroken);
 console.log(brokenWeapons)

 var test = _.map(weapons, makeBroken)
 console.log(test)
