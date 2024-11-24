Ext.define('VideoRental.store.MovieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.moviestore',
    model: 'VideoRental.model.Movie',
    autoLoad: false, // Explicitly call .load()
    autoSync: false // Explicitly call .sync()
});
