var app = app || {};

(module => {

    const bookCreateView = {}

    const $view = $('#book-create-view')

    bookCreateView.init = () => {


        $view.show()
    }
    
    module.bookCreateView = bookCreateView

})(app)