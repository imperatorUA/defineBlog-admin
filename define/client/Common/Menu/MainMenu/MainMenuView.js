Ext.define('Define.Common.Menu.MainMenu.MainMenuView', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mainMenuView',
    floating: false,
    plain: true,
    xtype: 'mainMenuView',

    initComponent: function () {
		this.tbar = {
			overflowHandler: 'scroller',			
			items: [{
		    	xtype: 'button',  
		    	text: 'Новости',
		    	margin: '0 10 10 0',
		    	handler: function() {
		    		Define.app.redirectTo('News');
		    	}		    	
		    }, { 
		    	xtype: 'button', 
		    	text: 'Управление пользывателями',
		    	margin: '0 10 10 0',
		    	handler: function() {
					Define.app.redirectTo('User');
		    	}		
		    }, {
		    	xtype: 'button', 
		    	text: 'Выйти',
		    	//margin: '0 10 10 0',
		    	handler: function () {
		    		document.location.href = '/defineBlog/define/logout.php';
		    	}		    	
		    }]
		};
		
		this.callParent();
	}
	
});