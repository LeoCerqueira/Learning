function defineFirstArg(func, arg) {

    return function innerFunc(arg1){
        return func(arg,arg1)
    }

}

/*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15