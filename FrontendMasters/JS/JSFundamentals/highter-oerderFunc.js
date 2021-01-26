const ifElse = (condition, isTrue, isFalse) => {
	return condition ? isTrue() : isFalse();
};
ifElse(
	true,
	() => {
		console.log(true);
	},
	() => {
		console.log(false);
	}
);

