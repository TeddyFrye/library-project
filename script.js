let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayInfo = function() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`
      }};
  
const book1 = new Book('The Hobbit', 'J. R. R. Tolkien', '295 pages', 'have read');
const book2 = new Book('The Name of the Wind', 'Patrick Rothfuss', '662 pages', 'have not read');
  
console.log(book1.sayInfo())
console.log(book2.sayInfo())


// JS to take the book info and put in the "library"
function addBookToLibrary
      