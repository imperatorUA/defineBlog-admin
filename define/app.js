Ext.Loader.setConfig({
    disableCaching: false
});

Ext.application({
	name: 'Define',

    appFolder: "client",

	autoCreateViewport: 'Define.Common.Views.MainView',

    defaultToken : 'News',

    controllers: bootstrap.controllers,

    listen: {
        controller: {
            '*': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    init: function () {
        
    },

    onUnmatchedRoute: function () {
        console.log('unmatchedroute');  
    }
});

Define.loadView = function (viewName, callback, loadOptions) {
    if (loadOptions) {
        if (loadOptions.hasController) {
            Ext.require([
                    viewName + 'Controller',
                    viewName
                ],
                callback
            );
        }
    } else {
        Ext.require(viewName, callback);
    }
}