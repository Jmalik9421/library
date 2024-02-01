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
    // clear booklist 
    bookList.innerHTML = '';

    // create table in dom
    const table = document.createElement('table');
    const trHead = document.createElement('tr');

    const titleHead = document.createElement('th');
    titleHead.textContent = 'Title';
    const authorHead = document.createElement('th');
    authorHead.textContent = 'Author';
    const pagesHead = document.createElement('th');
    pagesHead.textContent = 'Pages';

    trHead.appendChild(titleHead);
    trHead.appendChild(authorHead);
    trHead.appendChild(pagesHead);
    table.appendChild(trHead);
    bookList.appendChild(table);

    // loop through each book object in library
    myLibrary.forEach(book => {
        const tr = document.createElement('tr');

        const title = document.createElement('th');
        title.textContent = `${book.title}`;
        const author = document.createElement('th');
        author.textContent = `${book.author}`;
        const pages = document.createElement('th');
        pages.textContent = `${book.pages}`;

        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(pages);
        table.appendChild(tr);
    });
}

const form = document.querySelector('#add-book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    displayLibrary();
})
