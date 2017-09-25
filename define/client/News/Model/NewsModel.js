Ext.define('Define.News.Model.NewsModel', {
    extend: 'Define.Common.BaseModel',

	fields: [
		{name: 'id', 			    type: 'int'},
		{name: 'title', 			type: 'string'},
        {name: 'text',      		type: 'string'},
        {name: 'date_news', 		type: 'date', 	dateFormat: 'Y-m-d H:i:s'}
    ],
	
    /*proxy: {
        type: 'ajax',
		url: 'server/News/getNewById.php',
		reader: {
			type: 'json'
		}
    },*/

    saveNews: function (operation, callback) {
    	if (operation === 'I'){
			data = this.getData();
		} else if (operation === 'U') {
			data = this.getData();
			//data.id = this.get('id');
		} else if (operation === 'D') {
            data = this.getData();
		}

    	Ext.Ajax.request({
            url:  'server/News/saveNew.php',
            method: 'POST',
            params: {
                operation: operation,
                data: Ext.JSON.encode(data)
            },
            success: function(response) {
               callback && callback(response);
            },
            
            failure: function(response){
            
            }
        });
    }
});
