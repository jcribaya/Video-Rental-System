Ext.define('VideoRental.view.movie.MovieGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',
    requires: ['VideoRental.store.MovieStore'],
    bind: {
        store: '{movies}' // Bind to the ViewModel's store
    },
    title: 'Movie Records',
    columns: [
        { text: 'ID', dataIndex: 'id', width: 50 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 },
        { text: 'Release Date', dataIndex: 'releaseDate', xtype: 'datecolumn', format: 'Y-m-d', flex: 1 },
        { text: 'Rating', dataIndex: 'rating', width: 100 }
    ],
    tbar: [
        { text: 'Add Movie', handler: 'onAddMovie' },
        { text: 'Edit Movie', handler: 'onEditMovie', bind: { disabled: '{!selectedMovie}' } },
        { text: 'Delete Movie', handler: 'onDeleteMovie', bind: { disabled: '{!selectedMovie}' } }
    ],
    listeners: {
        select: 'onMovieSelect' // Bind selection to ViewModel
    }
});
