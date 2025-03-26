function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use 'new' operator to call the contstructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === true) {
            return(`${title} by ${author}, ${pages} pages, read`)
        } else {
            return(`${title} by ${author}, ${pages} pages, not read yet`)
        }
        
    }
}

const book1 = new Book('book name', 'people name', 'a number', true)

console.log(book1.info());