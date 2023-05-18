const addBook = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('submit');


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.read
    );
  };
}

function addBookToLibrary() {
  // do stuff here
}

const magician = new Book("Harry Potter", "L.L. Martin", 1000, "read");

const lord = new Book(
  "The Lord of The Rings",
  "Tolkien",
  "1200",
  "Not read yet"
);

myLibrary.push(lord);
myLibrary.push(magician);

console.log(myLibrary);
