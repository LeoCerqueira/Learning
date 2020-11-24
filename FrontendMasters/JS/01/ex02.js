class components {
	constructor() {
		this.list = [];
	}

	putIntoTheList(newItem) {
		
			console.log(newItem);
		
	}
}

let setup = ['Notebook', 'Monitors', 'Desk', 'Chair'];

var leandro = new components(setup);
leandro.putIntoTheList();
