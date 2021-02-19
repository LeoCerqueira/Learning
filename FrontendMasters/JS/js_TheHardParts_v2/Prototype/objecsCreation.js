function userCreator(name, score){
    const newuser = {};
    newuser.name = name;
    newuser.score = score;
    newuser.increment = function(){
        newuser.score++
    };
    return newuser;
};

const user1 = userCreator('Leo',2);
const user2 = userCreator('Nadja',1);
user1.increment();
console.log(user1.name,user1.score)