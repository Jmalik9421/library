const myLibrary = [];
const bookList = document.querySelector('#book-list');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    
}

function displayLibrary() {
    bookList.innerHTML = '';

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
        const deleteRow = document.createElement('td');
        deleteRow.innerHTML = `<button id='deleteRow'>Delete</button>`

        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(pages);
        tr.appendChild(read);
        tr.appendChild(deleteRow);
        table.appendChild(tr);
    });
}

function deleteRow() {
    const delArray = [...document.querySelectorAll('#deleteRow')];
    delArray.forEach(btn => {
        btn.addEventListener('click', () => {
            if(myLibrary.length === 1) {
                myLibrary.pop();
            } else {
                myLibrary.splice(delArray.indexOf(btn), 1);
            }
            displayLibrary();
        });
    });
}

const form = document.querySelector('#add-book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    displayLibrary();
    deleteRow();
})
