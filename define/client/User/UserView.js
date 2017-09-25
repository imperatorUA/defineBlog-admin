Ext.define('Define.User.UserView', {
    extend: 'Ext.panel.Panel',
    controller: 'UserViewController',

    /*frame: false,
    border: 0,*/

    items: {
    	xtype: 'grid',
    	title: 'Пользователи',
    	reference: 'userGrid',
        width: '100%',

        /*tools: [{
            type: 'plus',
            tooltip: 'Добавить',
            handler: 'onAddUser'
        }],*/

		columns: [{
			text: 'id',  
			dataIndex: 'id',
			flex: 0.1
		}, {
    		text: 'Логин', 
    		dataIndex: 'email' ,
    		flex: 0.2
		}, { 
    		text: 'Имя', 
    		dataIndex: 'first_name',
    		flex: 0.2
		}, { 
    		text: 'Фамилия', 
    		dataIndex: 'last_name',
    		flex: 0.2
		}, {
            xtype: 'actioncolumn',
            width: 25,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'btn-edit',
                tooltip: 'Редактировать Пользователя',    
                handler: 'onEditUser'        
            }]
        }]
    }

});