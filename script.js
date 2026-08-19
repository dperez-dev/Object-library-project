const title = document.getElementById("form-title"); 
const author = document.getElementById("form-author"); 
const description = document.getElementById("form-description");
const numOfPages = document.getElementById("form-numOfPages");
const form = document.getElementById("form");
const cardContainer = document.getElementById("card-container");
const deleteBtn = document.getElementById("deleteBtn")

let myLibrary = [];
let trackElementIndex = [];
let arrayIndex = 1;
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
        console.log(`the number of books are ${(myLibrary.length)}.`)
        console.log("Loop closed")
        createCard(myLibrary, myLibrary.length - 1);
    }
}

function createCard(array, i) {
    const card = document.createElement("div");
    card.classList = "card-container";
    arrayIndex = i;
    const html = `
        <div class="card-style" id="book-${i}">
            <h3>Title</h3>
            <p>${array[i].title}</p>
            <h3>Author</h3>
            <p>${array[i].author}</p>
            <h3>Number of pages</h3>
            <p>${array[i].numOfPages}</p>
            <h3>Have read?</h3>
            <input type="checkbox">
            <br>
            <button id="deleteBtn">Delete</button>
        </div>
    `;
    cardContainer.innerHTML += html;
}


function deleteElement(){
    myLibrary.splice(arrayIndex, 1);

    let removeElement = document.getElementById(`book-${arrayIndex}`);
    removeElement.remove();
    console.log("Array element DELETED!");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLibrary()
    checkForArrayElement(myLibrary)
})

cardContainer.addEventListener("click", e =>{
    e.target
    if(e.target.id.includes("deleteBtn")){
        deleteElement()
    }
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