// book class:respersents a Book


class Book{
	constructor(title,author,isbn){
		this.title=title;
		this.author=author;
		this.isbn=isbn;

	}
}
// ui class:handle ui tasks

class UI{
//all the mesthod are staic because we are instantiating the classes
	static displayBooks(){

		//creating an array of objects for example books with objects
		//properties with title,author,book
		const storedBooks =[
			{
				title:'Book one',
				author:'Jhon Doe',
				isbn:'1234'
			},
			{
				title:'Book two',
				author:'dhiru',
				isbn:'124'
			}
		];
		const books=storedBooks;
		books.forEach((book)=>UI.addBookToList(book));

	}
	static addBookToList(book){

	}
	static deleteBook(el){

	}
	static showAlert(message,ClassName){

	}
	static clearFields(){

	}
}
//store class: handles storage


class store{
	static getBooks(){

	}
	static addBooks(book){

	}
	static removeBook(isbn){

	}
}
//event :display books
// event: add abook
//event : remove a book
