Ext.application({
    name: 'VideoRental',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'moviegrid',
                    viewModel: {
                        type: 'movieviewmodel'
                    },
                    controller: 'moviecontroller'
                }
            ]
        });
    }
});
