var app = app || {};

(module => {

    const bookCreateView = {}

    const $view = $('#book-create-view')

    bookCreateView.init = () => {


        $view.show()

        $('#new-book').on('click', app.Book.create)
        
    
    }
    
    module.bookCreateView = bookCreateView

})(app)


