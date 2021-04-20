function addAnother (z){
    return function(x,y){
        return x+ y + z;
    }
}


console.log(addAnother(1)(20,21));