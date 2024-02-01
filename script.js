const myLibrary = [];
const bookList = document.querySelector('#book-list');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages`;
    };
};

function addBookToLibrary() {
    // get book details from form
    // create new Book object using above constructor
    // push to myLibrary
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    
}

function displayLibrary() {
    bookList.innerHTML = '';

    const ul = document.createElement('ul');
    bookList.appendChild(ul);

    myLibrary.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        ul.appendChild(li);        
    });
}

const form = document.querySelector('#add-book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    displayLibrary();
})
