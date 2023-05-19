const addBook = document.getElementById("add");
const library = document.getElementById("library");
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(
    new Book(title.value, author.value, pages.value, read.checked)
  );
}

function setGrid() {
  let l = myLibrary.length;
  console.log(l);
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

function showLibrary() {
  library.style.display = "grid";
  let l = myLibrary.length;
  document.querySelectorAll(".card").forEach((el) => el.remove());
  for (let i = 0; i < l; i++) {
    let cardSet = document.createElement("div");
    let Obj = myLibrary[i];
    // Prints "name Jean-Luc Picard" followed by "rank Captain"
    Object.keys(Obj).forEach((key) => {
      const newP = document.createElement("p");
      newP.innerHTML = Obj[key];
      if (key === "read" && Obj[key] === true) {
        newP.classList.add("true");
        newP.classList.add("read");
      } else {
        newP.classList.add("false");
        newP.classList.add("read");
      }
      cardSet.appendChild(newP);
    });

    cardSet.classList.add("card");
    library.appendChild(cardSet);
  }
}

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
  console.table(myLibrary);
  setGrid();
  showLibrary();
});

const magician = new Book("Harry Potter", "L.L. Martin", "1000", true);
const lord = new Book("The Lord of The Rings", "Tolkien", "1200", false);
myLibrary.push(lord);
myLibrary.push(magician);
