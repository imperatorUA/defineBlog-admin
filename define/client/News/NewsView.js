Ext.define('Define.News.NewsView', {
    extend: 'Ext.panel.Panel',
    controller: 'NewsViewController',

	items: {
    	xtype: 'grid',
    	title: 'Новости',
    	reference: 'newsGrid',
        width: '100%',
        tools: [{
            type: 'plus',
            tooltip: 'Добавить новость',
            handler: 'onAddNew'
        }, {
            type: 'refresh',
            tooltip: 'Обновить таблицу',
            handler: 'onRefreshNews'
        }],

		columns: [{
			text: 'id',  
			dataIndex: 'id',
			flex: 0.1
		}, {                
            text: 'Дата',
            dataIndex: 'date_news',
            xtype: 'datecolumn',
            format: 'H:i d.m.Y',
            flex: 0.3
        }, {				
			text: 'Заголовок',
			dataIndex: 'title',
			flex: 0.3
		}, {                
            text: 'Текст',
            dataIndex: 'text',
            flex: 0.3
        }, {
            xtype: 'actioncolumn',
            width: 25,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'btn-edit',
                tooltip: 'Редактировать запись',
                handler: 'onEditNew',
                reference: 'btnEdit'
            }]
        }, {
            xtype: 'actioncolumn',
            width: 25,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'btn-remove',
                tooltip: 'Удалить запись',
                handler: 'onDeleteNew'
            }]
        }]
    }
});