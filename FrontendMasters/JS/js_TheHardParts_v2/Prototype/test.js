function userCreator(name, score){
  
  this.name = name;
  this.score = score;
  


}

userCreator.prototype.increment = function(){this.score++;};
userCreator.prototype.login = function(){console.log('login');};

const user1 = new userCreator('leo', 1);
const user2 = new userCreator('Nadja', 3);


user2.increment();
user2.login();

console.log(user2.score)

