page('/', () => {
    $('.page1').hide()
    app.Book.fetchAll().then(books => {
        app.books

    })


})