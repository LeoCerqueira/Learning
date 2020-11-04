

// function funcao(param1, param2){
//     ver args = Array.prototype.slice.call(arguments, funcao.length);
//     console.log(args);
// }

function funcao(param1, param2,... otherParams){
    console.log(otherParams)
}

funcao(1,2,3,4,5,6);

let array1 = [1,2,3,4];
let array2 = [5,6,7,8, ...array1];
let string = 'Luiz carlos';
let stringArray = [...string]

console.log(array2)
console.log(stringArray)
