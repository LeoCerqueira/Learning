// Exercise 01

function addFavoriteBook(bookName) {
	if (!bookName.includes('Great')) {
		favoriteBooks.push(bookName);
	}
	function printFavoritBooks() {
		console.log(`Favorite books: ${favoriteBooks.length}`);
		for (let books of favoriteBooks) {
			console.log(books);
		}
	}
}
