// Dynamic Images

const jocasta = document.querySelector('.librarian-image');

function popIn() {
  jocasta.style.transitionDuration = '.5s';
  jocasta.style.transform = 'translate(-50%,-50%) scale(1)';
}
function popOut() {
  jocasta.style.transitionDuration = '.5s';
  jocasta.style.transform = 'translate(-50%,-60%) scale(0)';
}

// JS to take the book info and put in the "library"

function addBookToLibrary() {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;
  const page = document.getElementById('page-input').value;
  const readStatus = document.querySelector('input[name="readStatus"]:checked');
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

  if (!title || !author || !page || !readStatus) {
    popIn(); // Make the image pop in
  } else {
    popOut();
    bookShelf.appendChild(book);
  }
}
function clearLibrary() {
  const bookShelf = document.getElementById('book-shelf');
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }
  popOut();
}

// Button Actions
const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', addBookToLibrary);

const clearLibraryButton = document.getElementById('clear-library-button');
clearLibraryButton.addEventListener('click', clearLibrary);
