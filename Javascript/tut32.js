// Tutorial 32 - Exercise on Classes and Inheritance
console.log("Thisis Tut 32");

/*
Exercise
- Create a class Library and implement the following:
- constructor must take bookList as an Argument
- getBookList()
- issueBook(bookName,user)
- returnBook(bookName)
*/

// Create Class Library
class Library {

    // Constructor 
    constructor(bookList) {
        this.bookList = bookList;
    }

    // Function to display all books
    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    // Function to Issue a Book
    issueBook(bookName,user) {
        console.log(`${bookName} has been issued to ${user}`);
    }

    // Function to return a Book
    returnBook(bookName) {
        console.log(`${bookName} has been returned`);
    }
}

let arrBookList = ['Rich Dad Poor Dad','Test Book','You Can Win'];

let objLibrary = new Library(arrBookList);
console.log(objLibrary);
