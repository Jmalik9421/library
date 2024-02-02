const myLibrary = [];
const bookList = document.querySelector('#book-list');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    // get book details from form
    // create new Book object using above constructor
    // push to myLibrary
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const newBook = new Book(title, author, pages, read);
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
    const readHead = document.createElement('th');
    readHead.textContent = 'Read';
    const deleteHead = document.createElement('th');
    deleteHead.textContent = 'Delete';

    trHead.appendChild(titleHead);
    trHead.appendChild(authorHead);
    trHead.appendChild(pagesHead);
    trHead.appendChild(readHead);
    trHead.appendChild(deleteHead);
    table.appendChild(trHead);
    bookList.appendChild(table);

    // loop through each book object in library
    myLibrary.forEach(book => {
        const tr = document.createElement('tr');

        const title = document.createElement('td');
        title.textContent = `${book.title}`;
        const author = document.createElement('td');
        author.textContent = `${book.author}`;
        const pages = document.createElement('td');
        pages.textContent = `${book.pages}`;
        const read = document.createElement('td')
        read.textContent = `${book.read}`;
        const deleteBody = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = `delete`;

        deleteBody.appendChild(deleteBtn);

        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(pages);
        tr.appendChild(read);
        tr.appendChild(deleteBody);
        table.appendChild(tr);
    });
}

const form = document.querySelector('#add-book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    displayLibrary();
})
