// Hide error
document.getElementById("error").style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    // Handle empty search request
    if(searchText === ''){
      displayError();
    }
    else{
      // Hide error
      document.getElementById("error").style.display = 'none';
      // Clear Search Result and books contiti
      document.getElementById("book-display").textContent = '';
      document.getElementById("book-numbers").textContent = '';

      // load data 
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
      fetch(url)
      .then(res => res.json())
      .then(data => bookDisplaySection(data.docs))
    } 
}


const displayError = () => {
  document.getElementById("error").style.display = 'block';
  document.getElementById("book-numbers").textContent = '';
  document.getElementById("book-display").textContent = '';
}



// Display Search Result
const bookDisplaySection = books => {
    document.getElementById("book-numbers").textContent = '';
    const bookDisplay = document.getElementById("book-display");
    bookDisplay.textContent = '';
    if(books === null){
      displayError();
    }
    else{
      document.getElementById("error").style.display = 'none';
      document.getElementById("book-numbers").innerText = `Books Found : ${books.length}`;

      books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top p-3" alt="...">
        <div class="card-body">
          <h5 class="card-title ">Book Name : ${book.title}</h5>
          <p class="card-text">Author Name : ${book.author_name}</p>
          <p class="card-text>Publish Place: ${book.publish_place}</p>
          <p class="card-text>First Publish Year: ${book.first_publish_year}</p>
        </div>
      
      </div>
        `;
        bookDisplay.appendChild(div);
    })
    }

}
