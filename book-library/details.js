// Retrieve the book's ID from the URL parameter on the details page
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

if (bookId) {
  fetch(`http://127.0.0.1:8000/api/v1/books/${bookId}/`)
    .then(response => response.json())
    .then(book => {
      const bookDetailsContainer = document.querySelector('.book-details');

        bookDetailsContainer.innerHTML = `


      
        <img src="${book.cover_image}" alt="" class="image">
        <div class="info">
        <h2 class="book-title">Name: ${ book.title}</h2>
        <h2 class="publisher">Publisher: ${book.publisher.name}</h2>
        <h2 class="author">Authors: ${book.author.name}</h2>
        <p class="book__description">Book Description: ${book.description}</p>
        </div>

        `;


    })
    .catch(error => {
      console.log('Error:', error);
    });
}