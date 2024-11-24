/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'VideoRental.Application',

    name: 'VideoRental',

    requires: [
        // This will automatically load all classes in the VideoRental namespace
        // so that application classes do not need to require each other.
        'VideoRental.*'
    ],

    // The name of the initial view to create.
    mainView: 'VideoRental.view.main.Main'
});
