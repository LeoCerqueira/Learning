// var born = new Date("March 2, 2021"); // using new will make objects representations
// console.log(born)
// born.toUTCString();
// console.log(born)

//-----------Conver from one type to another

// let age = 29;
// let statment = "";
// let frase = Number(statment) + age;
// console.log(frase)
// let result;

// if(statment){
//     result = statment;
//     console.log(result + "yeah!")

// }

// var leo = 'leo';
// (function anotherMe() {
// 	var leo = 'Golumn';
// 	console.log(leo);
// })();
// console.log(leo);


// var leo = 'leo';
// {
// 	let leo = 'Golumn';
// 	console.log(leo);
// }
// console.log(leo);

// function ask(question){
//     return function waitASec(){
//         console.log(question);
//     };
// }

// var myQuestion = ask("What is closure?");

// var leo = {
//     name: "Leo",
//     ask(question){
//         console.log(this.name, question);
//     },
// };

// leo.ask("você está aí?")

 class Player {
     constructor(name){
         this.name = name;
     }
     say(nick){
         console.log(`${this.name } is playing with ${nick}`);         
     }
 }

 var Leo = new Player("Leo");
 var Ariel = new Player("Ariel");

 Leo.say("Golumn")
 Ariel.say("Farah")
