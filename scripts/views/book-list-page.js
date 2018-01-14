var app = app || {};

(module => {

    const bookListPage = {}

    bookListPage.initIndexView = (books) => {
        books.forEach(book => {
            $('#book-list').append(`<li>${book.title}</li>`)
        })
    }
$('#book-list').on('click', 'li', )
})