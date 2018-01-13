

var app = app || {};

(module => {

    const __API_URL__ = 'http://localhost:3000/api/v1/books'

    function Book(newBook) {
        Object.keys(newBook).forEach(key => this[key]= newBook[key])
        
    }

    function errorCallback(err) {
        console.error(err);
        module.errorView.initErrorPage(err);
    }

    Book.all = []

    Book.fetchAll = () => $.getJSON(__API_URL__).catch(errorCallback)

    Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id).catch(errorCallback)
    
    Book.deleteOne = id => {
        return $.ajax({
            url: __API_URL__ + '/' + id,
            method: 'DELETE'
        }).catch(errorCallback)
    }

    Book.update = book => {
        return $.ajax({
            url: __API_URL__ + '/' + book.book_id,
            method: 'PUT',
            data: book
        }).catch(errorCallback)
    }

    Book.create = event => {

        var addBook = new Book ({
            title: $('#create-title').val(),
            author: $('#create-author').val(),
            image_url: $('#create-url').val(),
            isbn: $('#create-isbn').val(),
            description: $('#create-description').val()
          })

          event.preventDefault();
        return $.post(__API_URL__, addBook)

        .catch(errorCallback)
    }

    module.Book = Book

})(app)