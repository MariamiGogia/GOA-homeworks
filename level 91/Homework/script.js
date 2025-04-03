const myForm = document.getElementById("form");

myForm.addEventListener('submit', async function(event){
    event.preventDefault();

    const searchPlace = document.getElementById("searchplace");
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchPlace.value}`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        const resultsDiv = document.getElementById("res");
        resultsDiv.innerHTML = '';

        data.items.forEach(item => {
            const book = item.volumeInfo;
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            bookDiv.innerHTML = `
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.authors}</p>
                    <p>Published Year: ${book.publishedDate}</p>
                    <p>Description: ${book.description}</p>
                    <p>Page Count: ${book.pageCount}</p>
                    ${book.imageLinks && book.imageLinks.thumbnail ? `<img src="${book.imageLinks.thumbnail}" alt="${book.title}">` 
                    : `No image of: ${book.title}`}
                </div>
            `;
            resultsDiv.appendChild(bookDiv);
        });
    }catch (error){
        console.error(error);
    }
});