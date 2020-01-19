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
		const storedBooks =store.getBooks();
		const books=storedBooks;
		books.forEach((book) => UI.addBookToList(book));

	}
	static addBookToList(book){
		//adding to booklist , we have to add to table that we created in html file
		// by using DOM we will first select the form body by its idnmae
		//then we will create an element using dom and by creatin a new element in the table
		//Then we will add row and show the books by using inner text

		// creating an variable list to select the table idname
		const list=document.querySelector('#book-list');

		//now creating dom element in html we creating tr here by using dom
		 const row= document.createElement('tr');
		 //now we are inserting our books by using innerhtml
		 // we are using bapticks becaus we wanna include our varialbles like title,quthor in td element
//we are insreting all our varables in the array book that we are sending  as argument for this particular function
//last td elemnt will used as our delete button
//always use flower brackets instead of parenthesis when using $variable name in bapticks
			row.innerHTML =`
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href='#' class='btn btn-danger btn-sm delete'>x</a></td>
			`;
//now you can remove this from our list becuase we are gonna add it to local storage
list.appendChild(row);
	}
	static deleteBook(el){
		//here when you send the target it is gonna be the delebutton be cause we send the code only for delete delebutton
		// to remove the entire row we need to delete the parent element because it will remove the entire createElement
		// so the parent element will be deleted onlcude title author isbn and delete delebutton

		// we will check for the el element if theu only click on delete button it should be delted
		// so first we check the clicked element as delete in its class ClassName

		if(el.classList.contains('delete')){
			//here .classlist function gives names in the class and contaisn will check that particular element
			//if it is there then it is gonna give boolean output
			//now we wanna delete the row so el would be a tag in our in  our html
			// so parent element would be td and its parent element would be trtable
			// that is how remove the entire row
			el.parentElement.parentElement.remove();
		}

	}
	static showAlert(message,className){
		//this function is created to show mesages on ui itself
		// we didnot create any alert classes in our html so we are gonna create them
		//using dom and create div element for these particular alert message that we wanna print
const div =document.createElement('div');
//we have created a div elemt with class name of alert alert-name given by arguments
//these alert class names are already given in bootstrap file that we included
//so according to the class name argument it is gonna be red or green for sucess class name or blue for info class name
div.className = `alert alert-${className}`;
//now we wanna display the message argument which can be dome by using the text node in dom
// we wanna display this message abouve our title in our form so we use dom to give title as parent createElement
// then we put it above it by using dom
div.appendChild(document.createTextNode(message));
//now we put it before our form in div with id container
const container=document.querySelector('.container');
const form=document.querySelector('#book-form');
// so we put our selected div class in container variable and form class in form variable
//we have insert above created div variable in the container before form element
container.insertBefore(div,form);
//so, above line insert div element before form in container
//this message gonna stay for all the time that we use our web page
// we want ot remove it after 3 secs

setTimeout(() => document.querySelector('.alert').remove(),3000);

	}
	static clearFields(){
		//after enter the values in the form the values will still be present in the form
		//so to make them go we are using this function to clear them
		//to clear them we are gonna use dom selectors and make value equal zero
		document.querySelector('#author').value=' ';
		document.querySelector('#title').value=' ';
		document.querySelector('#isbn').value=' ';
	}
}
//store class: handles storage


class store{
	// you are creating local storage to store our book objects
	//but local storage doesnt take any other inputs then string
	// for that reason we are stringfying the object using jason paresing
	static getBooks(){
		//now we are creating books variable and checking if we have any books
		// and returning the books from the list
		//remembe local storage saves elemenst as string so we use Json parse to convert them
		// back to normal arrays and objects and feed them to our ui

		let books;
		// checking if we have any elements at all if dont create an empty array
		if(localStorage.getItem('books')===null){
			books=[];
		}else{
			// if we have the elements present then send them to books variable and return it
			books = JSON.parse(localStorage.getItem('books'));
		}
return books;
	}
	static addBooks(book){
		const books=store.getBooks();
		// now we are get books function to check for books and store them in books $variable
		// what ever new book items that have entered are direclty pushed into books varaible
		// and also enter them to local storage so that they can hold the values
		// what ever we get in book argument are objects and arrays so we have to convert them to strings to store in local localStorage

		books.push(book);
	localStorage.setItem('books', JSON.stringify(books));

	}
	static removeBook(isbn){
// now we are getting the books that are avaialble and store them in books $variable

const books=store.getBooks();

// now we are checking all the elements in the array for that specific isbn values
// is it matches the valu thenwe are deleting them there
// we are ousing the for each loop for iterating through objects
books.forEach((book,index) => {
	if(book.isbn === isbn){
		// we are checking for isbn number match if its then we are removing the item from the object
		books.splice(index,1);
	}
});
// now we will store the newobject into our local localStorage
localStorage.setItem('books', JSON.stringify(books));
	}
}
//event :display books
// we can display what ever we stored our book value by using dom event listner
//the following line means when ever our pages is loaded call ui.dipalybooks function
document.addEventListener('DOMContentLoaded',UI.displayBooks);

// event: add abook
//now we are adding an even wehen ever someone click submit in our form
//we should add those details to book listner
// this can be done by using event listener and we can add the document to the listner
//here,first we are selectoing the form id bys using query selector and then we are adding event listerner
// then here we are creating a function using our even as an argument
//in the function we are getting the input values from the for by using query selector . value
// .value is used to get the value of the input given to the form
document.querySelector('#book-form').addEventListener('submit', (e) => {
	//whene ever submit button is pressed it will defualty send those value or reloads the pages
	// we need stop that for these particular program so that it wont reload directly
	//that can be done we used argument e as our evet so we just give method prevent default to stop interval
	e.preventDefault();
	const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;
   const isbn = document.querySelector('#isbn').value;
if(title===''||author===''||isbn===''){
	//here we can simple alert message  in the broweser but we are trying to message
	//our error in the ui itself that is why we are using showalert function there
	//which takes the message that we wann show and class type as arguments
	UI.showAlert('please fill in all fields','danger');

}else{

	//now we are giving this value book class simply instatinating the book class
 const book = new Book(title, author, isbn);
 //here this keyword plays a major role because of it we can pass those values to constructor
UI.clearFields();
//now we got the book values from our form now we wanna display interval
//this can be done because we already created an functiuon in our ui class we are gonna use that here
//so we add our book object which we created using instanitation above

UI.addBookToList(book);

store.addBooks(book);

UI.showAlert('book added','success');

}});

//event : remove a book
//when we select the delete button in the table we want record the target value
// then send oit to delete function so the it will be removed from the table
// for that again we use dom selector with an event lister of click

document.querySelector('#book-list').addEventListener('click',(e)=>
{
	UI.deleteBook(e.target);
	// for using remove book function from store we have to give them isbn values
	// to get isbn value we are using target in dom to get the element that will be delete elements
	// but we need isbn so parent element for del is td and the sibiing to td would isbn's td
let remove=e.target.parentElement.previousElementSibling.textContent;
 store.removeBook(remove);
	UI.showAlert('book deleted','info');
	// we have to remove the item from local storage as well so that it wont load up agian when ever we open the page

});
