const contructArr = function (){
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the biliards room?');
    return arr.join(' ');
};
let frase = contructArr('was', 'it','in');
console.log(frase);

const contructArray = function (){
    const arr = Array.from(arguments);
    arr.push('the biliards room?');
    return arr.join(' ');
};
let fraseWithFrom = contructArray('was', 'it','in');
console.log(fraseWithFrom);