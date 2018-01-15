var app = app || {};

(module => {

    const bookUpdateView = {}

    const $view = $('#book-update-view')

    bookUpdateView.init = () => {


        
        $('#edit-book').on('click', app.Book.update)
        
       





        $view.show()
        
    
    }
    
    module.bookUpdateView = bookUpdateView

})(app)
