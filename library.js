let uuid = self.crypto.randomUUID();
const libraryCatalog = [];
const bookshelf = document.querySelector('#bookshelf')
const dialog = document.querySelector('#newBookDialog');
const openDialogBtn = document.querySelector('#openDialogBtn');
const closeDialogBtn = document.querySelector('#closeDialogBtn');
const form = document.querySelector('#newBookForm');

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
    this.id = uuid;
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    const id = newBook.id
    libraryCatalog.push(newBook);
    shelfBooks(newBook)
}

function shelfBooks() {
    bookshelf.innerHTML = '';

    libraryCatalog.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('book');

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = book.read ? "Read" : "Not read yet";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);

        bookshelf.appendChild(card);
    });
}

openDialogBtn.addEventListener('click', () => dialog.showModal());
closeDialogBtn.addEventListener('click', () => dialog.close());

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    addBook(title, author, pages, read);

    form.reset();
    dialog.close();
});

addBook('ooga', 'booga', 2938752, false)
addBook('oop', 'goop', 9898989, false)
addBook('gop', 'goop', 34561346, false)
addBook('pickles', 'booga', 3, false)
addBook('george', 'booga', 3446, false)

console.log(libraryCatalog);
