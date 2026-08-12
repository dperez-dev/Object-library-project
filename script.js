const title = document.getElementById("form-title"); 
const author = document.getElementById("form-author"); 
const description = document.getElementById("form-description");
const numOfPages = document.getElementById("form-numOfPages");
const form = document.getElementById("form");
const cardContainer = document.getElementById("card-container");

let myLibrary = [];

function createBook (title, author, numOfPages) {
    this.title = title;
    this.author = author; 
    this.numOfPages = numOfPages;
    const generateId = crypto.randomUUID();
    this.generateBook = function() {
        return `Title: ${title}, Author: ${author}, Number of pages: ${numOfPages}, ID: ${generateId}`;
    };
}

function addToLibrary() {
    const newEntry = new createBook(title.value, author.value, numOfPages.value);
    myLibrary.push(newEntry);
}

function checkForArrayElement(array){
    let i = 0;
    while(i < array.length){
        if(i < array.length){
            i++;
            console.log(`i found ${i} array element`)
        }
    }
}

function createCard(array) {
    const card = document.createElement("div");
    card.classList = "card-container";

    array.forEach((element) => {
        const html = `
            <div class="card-style">
                <h3>Title</h3>
                <p>${element.title}</p>
                <h3>Author</h3>
                <p>${element.author}</p>
                <h3>Number of pages</h3>
                <p>${element.numOfPages}</p>
                <h3>Have read?</h3>
                <input type="checkbox">
            </div>
        `;
        cardContainer.innerHTML += html;
    });
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