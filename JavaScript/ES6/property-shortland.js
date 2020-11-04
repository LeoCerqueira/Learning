let first_name = 'leo'
let last_name = 'santos'

let obj = {
    first_name, 
    last_name,   
    
};

function funcao({first_name,last_name}){
    console.log(first_name,last_name);
        
}

funcao(obj)
console.log(obj)
