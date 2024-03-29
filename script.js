const addBook = document.getElementById("add");
const library = document.getElementById("library");
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");

// Object constuctor

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleReaded() {
    this.read = !this.read;
  }
}

// Library array
let myLibrary = [];
console.table(JSON.parse(localStorage.getItem("libraire")));
let localLibrary = [...JSON.parse(localStorage.getItem("libraire"))];
for (let i = 0; i < localLibrary.length; i++) {
  myLibrary.push(
    new Book(
      localLibrary[i].title,
      localLibrary[i].author,
      localLibrary[i].pages,
      localLibrary[i].read
    )
  );
}

// Add new object0
function addBookToLibrary() {
  myLibrary.push(
    new Book(title.value, author.value, pages.value, read.checked)
  );
}

// Set grid size depends on number of cards
function setGrid() {
  let l = myLibrary.length;
  if (l < 5) {
    library.style.gridTemplate = "repeat(2, 1fr) / repeat(2, 1fr)";
  } else if (l < 9) {
    library.style.gridTemplate = "repeat(2, 1fr) / repeat(4, 1fr)";
  } else if (l < 13) {
    library.style.gridTemplate = "repeat(2, 1fr) / repeat(6, 1fr)";
  } else if (l < 19) {
    library.style.gridTemplate = "repeat(3, 1fr) / repeat(6, 1fr)";
  } else {
    library.style.gridTemplate = "repeat(3, 1fr) / repeat(6, 1fr)";
  }
}

// Delete the selected card
function deleteCard() {
  this.style.backgroundColor = "black";
  let k = this.parentNode.getAttribute("id");
  myLibrary.splice(k, 1);
  showLibrary();
}

// Toggle read status on click
function toggleRead() {
  let k = this.parentNode.getAttribute("id");
  console.log(myLibrary[k] + "" + myLibrary[k].read);
  myLibrary[k].toggleReaded();
  showLibrary();
}

function storeArray() {
  localStorage.setItem("libraire", JSON.stringify(myLibrary));
  console.table(myLibrary);
}

// Show and refresh library on screen
function showLibrary() {
  storeArray();
  setGrid();
  library.style.display = "grid";
  let l = myLibrary.length;
  document.querySelectorAll(".card").forEach((el) => el.remove());
  for (let i = 0; i < l; i++) {
    let cardSet = document.createElement("div");
    let Obj = myLibrary[i];

    Object.keys(Obj).forEach((key) => {
      const newP = document.createElement("p");
      newP.innerHTML = Obj[key];
      if (key === "read") {
        if (Obj[key] === true) {
          newP.classList.add("true");
          newP.innerHTML = "Done! 	&#128521;";
        } else {
          newP.classList.add("false");
          newP.innerHTML = "Not yet &#128538;";
        }
      }
      newP.addEventListener("click", toggleRead);
      cardSet.appendChild(newP);
    });

    const indexNo = document.createElement("div");
    indexNo.innerHTML = i + 1;
    indexNo.classList.add("indexNo");
    cardSet.appendChild(indexNo);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", deleteCard);
    cardSet.appendChild(deleteBtn);

    cardSet.classList.add("card");
    cardSet.setAttribute("id", i);
    library.appendChild(cardSet);
  }
}

// Add new book button
addBook.addEventListener("click", () => {
  event.preventDefault();
  library.style.display = "none";
  form.style.display = "grid";
  addBook.style.display = "none";
});

submit.addEventListener("click", () => {
  event.preventDefault();
  addBookToLibrary();
  form.style.display = "none";
  addBook.style.display = "block";
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  showLibrary();
});

showLibrary();
