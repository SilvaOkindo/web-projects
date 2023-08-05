const container = document.querySelector('.container');

fetch('http://127.0.0.1:8000/api/v1/books/')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched book data:', data);
    bookGrid(data);
  });

function bookGrid(books) {
  const gridContainer = document.querySelector('.grid');

  books.forEach(book => {
    const img = document.createElement('img');
    img.src = book.cover_image;

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;
    bookTitle.classList.add('book-title');

    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.append(img, bookTitle);
    gridItem.setAttribute('data-book-id', book.id); // Use data-book-id attribute

    // Add click event listener to the grid item
    gridItem.addEventListener('click', navigateToDetailsPage, false);

    gridContainer.appendChild(gridItem);
  });
}

function navigateToDetailsPage(event) {
  const gridItem = event.currentTarget;
  const bookId = gridItem.getAttribute('data-book-id');

  // Navigate to the book details page with the book ID in the URL
  window.location.href = `details.html?id=${bookId}`;
}


// fetch categories
fetch('http://127.0.0.1:8000/api/v1/categories/')
    .then(response=> response.json())
    .then(data => {
      console.log(data);
       renderCategories(data);
    })



function renderCategories(categories) {

  const categoriesContainer = document.querySelector('.categories');
  categories.forEach(category => {
    const categoryItem = document.createElement('div');

    const image = document.createElement('img');
    image.src = category.image;

    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.name;

    categoryItem.classList.add('category-item');

    categoryItem.append(image, categoryTitle)

   
    categoriesContainer.append(categoryItem);
  })
}


// featured books

fetch('http://127.0.0.1:8000/api/v1/featured-books/')
  .then(response => response.json())
  .then(data => {
    renderFeaturedBooks(data);
    console.log(data.name)
  })




function renderFeaturedBooks(books) {
  const featuredContainer = document.querySelector('.featured__books');
  let images = '';
  books.forEach(book => {
       images += `<img src="${book.cover_image}" class='image' >`;
  });
  featuredContainer.innerHTML = images;
  
}