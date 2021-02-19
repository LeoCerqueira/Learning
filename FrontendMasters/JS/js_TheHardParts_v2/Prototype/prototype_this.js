function userCreator(name, score) {
	const newuser = Object.create(userFunctionStore);
	newuser.name = name;
	newuser.score = score;

	return newuser;
}

const userFunctionStore = {
	increment: function () {
		const add1 = () => {
			this.score++;
		};
		add1();
	},
};

const user1 = userCreator('Leo', 6);
const user2 = userCreator('Nadja', 1);
user1.increment();
console.log(user1.name, user1.score);
