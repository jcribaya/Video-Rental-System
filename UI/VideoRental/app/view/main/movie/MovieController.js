Ext.define('VideoRental.view.movie.MovieController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.moviecontroller',

    onAddMovie: function () {
        const viewModel = this.getViewModel();
        viewModel.set('selectedMovie', Ext.create('VideoRental.model.Movie')); // Create a new movie
        viewModel.set('formTitle', 'Add Movie');
        this.showMovieForm();
    },

    onEditMovie: function () {
        const viewModel = this.getViewModel();
        viewModel.set('formTitle', 'Edit Movie');
        this.showMovieForm();
    },

    onDeleteMovie: function () {
        const store = this.getViewModel().getStore('movies');
        const selectedMovie = this.getViewModel().get('selectedMovie');
        if (selectedMovie) {
            store.remove(selectedMovie);
            store.sync(); // Save changes to the server
        }
    },

    onSaveMovie: function (button) {
        const viewModel = this.getViewModel();
        const store = viewModel.getStore('movies');
        const selectedMovie = viewModel.get('selectedMovie');
        if (selectedMovie.phantom) {
            store.add(selectedMovie); // Add new movie to the store
        }
        store.sync(); // Save changes to the server
        button.up('window').close(); // Close the form
    },

    onCancel: function (button) {
        button.up('window').close(); // Close the form
    },

    showMovieForm: function () {
        Ext.create('VideoRental.view.movie.MovieForm', {
            viewModel: this.getViewModel() // Bind the same ViewModel
        }).show();
    },

    onMovieSelect: function (grid, record) {
        this.getViewModel().set('selectedMovie', record); // Update selectedMovie in ViewModel
    }
});
