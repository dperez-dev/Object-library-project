const title = document.getElementById("form-title"); 
const author = document.getElementById("form-author"); 
const description = document.getElementById("form-description");
const numOfPages = document.getElementById("form-numOfPages");
const form = document.getElementById("form");
const cardContainer = document.getElementById("card-container");

let myLibrary = [];
let trackElementIndex = [];
let arrayIndex = 0;
let findIndex = 0;


function createBook (title, author, numOfPages, id) {
    this.title = title;
    this.author = author; 
    this.numOfPages = numOfPages;
    this.id = crypto.randomUUID();

}

function addToLibrary() {
    const newEntry = new createBook(title.value, author.value, numOfPages.value);
    myLibrary.push(newEntry);
}

function checkForArrayElement(){
    if((myLibrary.length - 1) > (myLibrary.length -2)){
        console.log(`the number of books are ${(myLibrary.length - 1) + 1}.`)
        console.log("Loop closed")
        createCard(myLibrary, myLibrary.length - 1);
    }
}

function createCard(array, i) {
    const card = document.createElement("div");
    card.classList = "card-container";
    arrayIndex = i;
    const html = `
        <div class="card-style">
            <h3>Title</h3>
            <p>${array[i].title}</p>
            <h3>Author</h3>
            <p>${array[i].author}</p>
            <h3>Number of pages</h3>
            <p>${array[i].numOfPages}</p>
            <h3>Have read?</h3>
            <input type="checkbox">
            <br>
            <button>Delete</button>
        </div>
    `;
    cardContainer.innerHTML += html;
}

function creatCard(array, i){

}


function deleteElement(){
    
    myLibrary.splice(arrayIndex, 1);
    console.log("Array element DELETED!");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLibrary()
    checkForArrayElement(myLibrary)
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