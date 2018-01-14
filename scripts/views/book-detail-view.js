var app = app || {};

(module => {

    const bookDetailView = {}

    
    const $view = $('#book-detail-view')
    
    bookDetailView.init = (book) => {

        
        $('.page').hide()
        $('#book-detail-view').empty()
        
        
        $view.append(`<h1>${book.title}: ${book.author}:${book.description}:<img src="${book.image_url}"></h1> <button id="update-book" data-id="book_id">update</button> <button id="delete-book" data-id="book_id">delete</button>`)
        $('#update-book').on('click', () => app.Book.update (book, app.bookUpdateView.init))

        // $('#delete-book').on('click', )

        $view.show()
    }
    
    module.bookDetailView = bookDetailView

})(app)
