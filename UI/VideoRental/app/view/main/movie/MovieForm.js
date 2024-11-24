Ext.define('VideoRental.view.movie.MovieForm', {
    extend: 'Ext.window.Window',
    xtype: 'movieform',
    modal: true,
    width: 400,
    layout: 'fit',
    bind: {
        title: '{formTitle}' // Bind the title dynamically
    },
    items: [
        {
            xtype: 'form',
            layout: 'form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    bind: '{selectedMovie.title}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Genre',
                    bind: '{selectedMovie.genre}'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Release Date',
                    bind: '{selectedMovie.releaseDate}',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Rating',
                    bind: '{selectedMovie.rating}',
                    maxValue: 10,
                    minValue: 0
                }
            ]
        }
    ],
    buttons: [
        { text: 'Save', handler: 'onSaveMovie' },
        { text: 'Cancel', handler: 'onCancel' }
    ]
});
