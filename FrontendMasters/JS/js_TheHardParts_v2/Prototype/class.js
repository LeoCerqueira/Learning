class UserCreator {
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}
	increment() {
		this.score++;
	}
	login() {
		console.log(this.name);
	}
}

const user1 = new UserCreator('Leo', 12);
user1.increment();
console.log(user1.score);
user1.login();
