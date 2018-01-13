page('/*', (ctx, next) => {
    $('.page').hide()
    next()
})

page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListView.init(books)
    })
})

page('/books/new', () => app.bookCreateView.init())

page('/books/:id', (ctx) => {
    app.Book.fetchOne(ctx.params.id).then(book => {
        app.bookDetailView.init(book)
    })
})

page.start()