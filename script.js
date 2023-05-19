const addBook = document.getElementById("add");
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

addBook.addEventListener("click", () => {
  event.preventDefault();
  form.style.display = "grid";
});

submit.addEventListener("click", () => {
  event.preventDefault();
  addBookToLibrary();
  form.style.display = "none";
  console.table(myLibrary);
});

const magician = new Book("Harry Potter", "L.L. Martin", "1000", true);

const lord = new Book("The Lord of The Rings", "Tolkien", "1200", false);

myLibrary.push(lord);
myLibrary.push(magician);
