//Anotações de aprendizados:

//      01-tentar usar sempre o  let para declarar variáveis pois ele cobre o seu
//  local do escopo somente e não pode ser redaclarado

//      02-usando a crase pra declarar strings podemos fazer um layout mais elegante
// podemos usar o ${} para colocarmos uma variável dentro de uma sring tambem.

// Práticas:
// Usar let, crase para strings permitingo a interpolação

let array = [1, 2, 3, 4, 5, 6];

// let array = [
//     {},{},{},{}
// ]
let obj = {
	first_name: 'luiz',
	last_name: 'carlos',
};

// for (let i in array){
//     console.log(array[i])
// }

// for (let i in obj){
//     console.log(i,obj[i])
// }

for (let obj of array) {
	console.log(obj);
}

console.log(array.entries());
for (let [index, value] of array.entries()) {
	//converte para uma coleção
	console.log(index, value);
}

let keys = Object.keys(obj);

for (let key of keys) {
	console.log(obj[key]);
}

