function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayTitle = function() {
      console.log(title)
    }
  }
  
  const book1 = new Book(['The Hobbit'], ['J. R. R. Tolkien'], ['295 pages'], ['have read'])
  const book2 = new Book(['The Name of the Wind'], ['Patrick Rothfuss'], ['662 pages'], ['have not read'])
  book1.sayInfo() 
  book2.sayInfo()) 
