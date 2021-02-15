function callTimes() {
	var counter = 0;

	return () => {counter++ 
        console.log(counter)}
    
}

/*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2
