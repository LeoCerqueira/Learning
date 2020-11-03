let array = [1, 2, 3, 4, 5, 6];

// let array = array.map(function(value){
//     return value * 10
// });

let array2 = array.map((value) => value * 10);
//declara a função map com o argumento value e  depois da flecha o que será feito.

console.log(array2);

//Para mais de uma linha na função:

let array2 = array.map((value) => {
	return value * 10;
});

// código limpo

array.map((value) => (value > 10 ? 0 : 2));

let funcaoSoma = (param1, param2) => param1 + param2;

setTimeout(() => execucao, 100);
setTimeout(() => { 
    
    //execucao

}, 100);


setInterval(() => execucao, 100);
