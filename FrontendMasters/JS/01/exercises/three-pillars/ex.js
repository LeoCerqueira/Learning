class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}



function loadBooks(Bookshelfs) {	

	fakeAjax(BOOK_API,function callBack(Books) {
		for(let book of Books){
			Bookshelfs.addFavoriteBook(book);
		}
		Bookshelfs.printFavoriteBooks();
	})


	
}

var BOOK_API = "https://some.url/api";
var mybook = new Bookshelf;
loadBooks(mybook)


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
