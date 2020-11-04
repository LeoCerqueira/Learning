//api Intl

let date = new Date();

console.log(new Intl.DateTimeFormat('pt-BR', {month: 'long', day:"numeric", year:"numeric"}).format(date)); 
console.log(new Intl.DateTimeFormat('en-US').format(date)); 
console.log(new Intl.NumberFormat('pt-BR').format(2000.22)); 
console.log(new Intl.NumberFormat('en-US').format(2000.22));
console.log(new Intl.NumberFormat('pt-BR',{minimumFractionDigits: 2}).format(2000)); 
console.log(new Intl.NumberFormat('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 3, currency:'BRL', style:'currency'}).format(2000.22222)); 




