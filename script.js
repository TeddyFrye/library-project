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

function addBookToLibrary(){
    const title = document.getElementById("title-input").value;
    const author = document.getElementById("author-input").value;
    const page = document.getElementById("page-input").value;
    const read = document.getElementById("read-input").value;
    const bookContainer = document.getElementById("book-container");
    const randomColorIndex = Math.floor(Math.random() * 4);
  
    // Create a new book element and apply the .book class and data-color style
    const book = document.createElement("div");
    book.classList.add("book");
    book.setAttribute("data-color", randomColorIndex);
    
    // Set the title and author text of the book element
    const titleElement = document.createElement("p");
    titleElement.textContent = title;
    book.appendChild(titleElement);
    
    const authorElement = document.createElement("p");
    authorElement.textContent = `by ${author}`;
    book.appendChild(authorElement);

    const pageElement = document.createElement("p");
    pageElement.textContent = `by ${page}`;
    book.appendChild(pageElement);

    const readElement = document.createElement("p");
    readElement.textContent = `by ${read}`;
    book.appendChild(readElement);
    
    // Add the new book element to the book container
    bookContainer.appendChild(book);
  }
}



// Button Actions


const clear = document.querySelector("clear");
clear.addEventListener("click", (e) => {
  bookSpine.forEach((bookSpine) => {
    bookSpine.style.backgroundColor = "";
  });
});