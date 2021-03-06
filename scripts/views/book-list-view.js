var app = app || {};

(module => {

    const bookListView = {}

    const $view = $('#book-list-view')

    bookListView.init = (books) => {

        $('.page').hide()
        // console.log('books', books)

        // $('#book-list').empty()
        // let source = $('#book-item-template').text();
        // var template = Handlebars.compile(source);
        // books.forEach(function (book) {
        //     $('#book-list').append(template(book));
        // })
        $('#book-list').empty()
        books.forEach(book => {
 
            $('#book-list').append(`
            <li data-id="${book.book_id}"> ${book.title}:${book.author}:<img src="${book.image_url}"></li>
            `)
        })
 
      $('#book-list').on('click', 'li', (event) => {

        const id = $(event.target).data('id')
        page('/books/' + id)

    })    

    $view.show()

    }
    
    module.bookListView = bookListView

}) (app)