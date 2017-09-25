Ext.require('Define.Common.Menu.MainMenu.MainMenuView');

Ext.define('Define.Common.Views.MainView', {
    extend: 'Ext.container.Viewport',
    layout: 'border',

    id: 'mainView',

    initComponent: function () {
        var require = Ext.require;

        this.callParent();
    },

    items: [{
        xtype: 'mainMenuView',
        id: 'mainViewNorth',
        region: 'north'
    }, {
        region: 'center',
        id: 'centerContainer',
		scrollable: true,
		autoHeight: true,
		layout: {
			type: 'vbox',
			align: 'stretch'
		}
    }]
});