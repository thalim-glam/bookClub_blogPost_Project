var bookObject={
    bookTitle:"",
  }
var titleInput = document.querySelector("#search-input");

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    // function openModal($el) {
    //   $el.classList.add('is-active');
    // }
  
    // function closeModal($el) {
    //   $el.classList.remove('is-active');
    // }
// function for book search/api call
function closeAllModals() {
    // (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    //   closeModal($modal);
    // });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-book-search') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', (event) => {
      event.preventDefault();
      var titleInput = document.querySelector("#search-input");
      var title = titleInput.value;
      openModal($target);
      getOmdb(title);
    });
  });
  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeAllModals();
    }
  });
});

var getGoogleBooks = function (title) {
    //event.preventDefault();
    var GoogleBooksApiUrl = " https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key" + bookApiKey + "&t=" + title;
  
    fetch(GoogleBooksApiUrl)
        .then(response => 
            response.json())
            .then (result => {
            this.setState({books:result.items})    
            })
        }
      .then(function (data) {
        bookTitle = data.Title;
        var bookTitleInfo = document.querySelector("#title");
        bookTitleInfo.textContent = bookTitle;
  
        //   plot = data.Plot;
        // var plotInfo = document.querySelector("#plot");
        // plotInfo.textContent = "Plot description: " + plot;
  
        // year = data.Year;
        // var yearInfo = document.querySelector("#year");
        // yearInfo.textContent = "Year released: " + year;
      })