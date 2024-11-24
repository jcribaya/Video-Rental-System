Ext.define('VideoRental.view.movie.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'VideoRental.movieviewmodel',
    stores: {
        movies: {
            type: 'moviestore'
        }
    },
    data: {
        selectedMovie: null, // Bind to the grid's selected record
        formTitle: '' // Dynamic title for the popup form
    }
});
