class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = false;
    }

    toggleReadStatus() {
      this.isRead = !this.isRead;
    }
}

  const form = document.getElementById("form1");
  const bookList = document.getElementById("bookList");
  const libraryList = document.getElementById("libraryList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;

    const book = new Book(title, author, pages);

    const div = document.createElement("div");
    div.classList.add("book-card");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <button onclick="addToLibrary('${book.title}', '${book.author}', ${book.pages})">Add to Library</button>
    `;
    bookList.appendChild(div);

    form.reset();
});



function addToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);

    let library = JSON.parse(localStorage.getItem("library")) || [];
    library.push(book);
    localStorage.setItem("library", JSON.stringify(library));
    renderLibrary();
}



function renderLibrary() {
    const library = JSON.parse(localStorage.getItem("library")) || [];
    libraryList.innerHTML = ''; 

    if (library.length === 0) {
      libraryList.innerHTML = "<p><i>No books yet!</i></p>";
    }

    library.sort((a, b) => a.title.localeCompare(b.title));

    library.forEach((book, index) => {
      const div = document.createElement("div");
      div.classList.add("book-card");
      div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <button onclick="toggleRead(${index})" class="read-btn">${book.isRead ? "Mark as Unread" : "Mark as Read"}</button>
        <button onclick="deleteFromLibrary(${index})" class="delete-btn">Delete</button>
      `;
      libraryList.appendChild(div);
    });
}



function toggleRead(index) {
    const library = JSON.parse(localStorage.getItem("library")) || [];
    library[index].toggleReadStatus();
    localStorage.setItem("library", JSON.stringify(library));
    renderLibrary();
}



function deleteFromLibrary(index) {
    const library = JSON.parse(localStorage.getItem("library")) || [];
    library.splice(index, 1); 
    localStorage.setItem("library", JSON.stringify(library));
    renderLibrary();
}
renderLibrary();