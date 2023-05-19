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

Book.prototype.toggleReaded = function () {
  console.log(this.read);
  this.read = !this.read;
  console.log(this.read);
};

function addBookToLibrary() {
  myLibrary.push(
    new Book(title.value, author.value, pages.value, read.checked)
  );
}

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

function deleteCard() {
  this.style.backgroundColor = "black";
  let k = this.parentNode.getAttribute("id");
  myLibrary.splice(k, 1);
  showLibrary();
}

function toggleRead() {
  let k = this.parentNode.getAttribute("id");
  myLibrary[k].toggleReaded();
  showLibrary();
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
      if (key === "read") {
        if (Obj[key] === true) {
          newP.classList.add("true");
          newP.classList.add("read");
        } else {
          newP.classList.add("false");
          newP.classList.add("read");
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
  setGrid();
  showLibrary();
});

const magician = new Book("Harry Potter", "L.L. Martin", "1000", true);
const lord = new Book("The Lord of The Rings", "Tolkien", "1200", false);
myLibrary.push(lord);
myLibrary.push(magician);
