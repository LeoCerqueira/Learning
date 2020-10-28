var meuArray = ['Array de pessoas','Olá mundo', 'Son', '1','12','13']

// adding an element at the end

meuArray.push(350)
meuArray.push('Leo')


// adding an element at the start

meuArray.unshift('2')
meuArray.unshift('primeiro elemento')



//adding anew element on the midle  ----------- splice(after this item , 0 , 'elements' )

meuArray.splice(1, 0,'11','12', '13' )

//adding two arrays 

var meuArray2 = ['music','sports','family']

var newArray = meuArray.concat(meuArray2) // returns a new array to you


//removing elements

//end

meuArray.pop()

// first eelement

meuArray.shift()
console.log(meuArray)

// midel

meuArray.splice(1,4,'este é umnovo elemento')
console.log(meuArray)

