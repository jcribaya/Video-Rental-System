Ext.define('VideoRental.model.Movie', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'genre', type: 'string' },
        { name: 'releaseDate', type: 'date' },
        { name: 'rating', type: 'float' }
    ],
    proxy: {
        type: 'rest',
        url: '/api/movies', // REST API endpoint
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});
