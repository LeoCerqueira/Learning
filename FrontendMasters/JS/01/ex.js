// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
function addFavoriteBook(bookName) {
	if (!bookName.includes('Great')) {
		favoriteBooks.push(bookName);
	}
}

function printFavoritBooks() {
	console.log(`Favorite books: ${favoriteBooks.length}`);
	for (let books of favoriteBooks) {
		console.log(books);
	}
}

printFavoritBooks();
