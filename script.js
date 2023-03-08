// JS to take the book info and put in the "library"

function addBookToLibrary() {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;
  const page = document.getElementById('page-input').value;
  const readStatus = document.querySelector('input[name="readStatus"]:checked').value;
  const bookShelf = document.getElementById('book-shelf');
  const randomColorIndex = Math.floor(Math.random() * 4);

  // Create book and color
  const book = document.createElement('div');
  book.classList.add('book');
  book.setAttribute('data-color', randomColorIndex);

  // Label book info
  const titleElement = document.createElement('p');
  titleElement.textContent = title;
  titleElement.classList.add('title');
  book.appendChild(titleElement);

  const authorElement = document.createElement('p');
  authorElement.textContent = `by ${author}`;
  book.appendChild(authorElement);

  const pageElement = document.createElement('p');
  pageElement.textContent = `${page} pages`;
  book.appendChild(pageElement);

  const readElement = document.createElement('p');
  readElement.textContent = readStatus === 'haveRead' ? 'Read' : 'Unfinished';
  book.appendChild(readElement);

  // Add book to shelf
  bookShelf.appendChild(book);
}

// Button Actions (CLEAR BUTTON NOT READY)
const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', addBookToLibrary);

/* const clear = document.querySelector("clear");
clear.addEventListener("click", (e) => {
  bookSpine.forEach((bookSpine) => {
    bookSpine.style.backgroundColor = "";
  });
});
*/

/*
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
*/
