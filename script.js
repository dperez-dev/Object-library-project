const title = document.getElementById("form-title"); 
const author = document.getElementById("form-author"); 
const description = document.getElementById("form-description");
const numOfPages = document.getElementById("form-numOfPages");
const form = document.getElementById("form");


let myLibrary = [];

function createBook (title, author, description, numOfPages) {
    this.title = title;
    this.author = author; 
    this.description = description;
    this.numOfPages = numOfPages;
    const generateId = crypto.randomUUID();
    this.generateBook = function() {
        return `Title: ${title}, Author: ${author}, Description: ${description}, Number of pages: ${numOfPages}, ID: ${generateId}`;
    };
}

function addToLibrary() {
    const newEntry = new createBook(title.value, author.value, description.value, numOfPages.value);
    myLibrary.push(newEntry);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLibrary()
})


/**
 * things required for a boook
 * 1. title
 * 2. author
 * 3. description
 * 4. number of pages
 * 5. ID
 */

/**
 * - when creating a new book, you need to call the constructor. so 
 *   when attempting that
 */