Ext.define('Define.User.Model.UserModel', {
    extend: 'Define.Common.BaseModel',

	fields: [
		{name: 'id', 			type: 'int'},
		{name: 'email', 		type: 'string'},
        {name: 'password',      type: 'string'},
		{name: 'first_name', 	type: 'string'},
		{name: 'last_name', 	type: 'string'},
		{name: 'admin', 		type: 'bool'}
    ],
	
	
    proxy: {
        type: 'ajax',
		url: 'server/User/getUserById.php',
		reader: {
			type: 'json'
		}
    },

    saveUser: function(operation){
    	var 
			data = this.getData(), 
			me = this
		;

        //delete data.id;

        Ext.Ajax.request({
            url:  'server/User/saveUser.php',
            method: 'POST',
            params: {             
                operation: operation,   
                data: Ext.JSON.encode(data)
            },
            success: function(response) {
                var 
                    data = Ext.JSON.decode(response.responseText),
                    store = Ext.getStore('userGridStore')
                ;
                if(data.operation == 'I'){
                    store.add({
                        id: data.id,
                        email: data.email,
                        first_name: data.first_name,
                        last_name: data.last_name
                    });

                    textSuccess = 'Пользователь добавлен';
                } else if(data.operation == 'U'){
                    
                    store.findRecord('id', data['id']).set(data);
                    store.commitChanges();
                    textSuccess = 'Пользователь изменен';
                } else if(data.operation == 'D'){
                    textSuccess = 'Пользователь удален';
                    store.remove(store.findRecord('id', data['id']));
                }
                

                Ext.toast({
                    html: textSuccess,
                    title: false,
                    width: 300,
                    align: 't',
                    bodyStyle: 'color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;'
                }); 
            },
            
            failure: function(response) {	        
	            Ext.toast({
	                html: response.responseText,
	                title: false,
	                align: 't',
	                bodyStyle: 'color: #a94442; background-color: #f2dede; border-color: #ebccd1;'
	            });
            }
        });
    }
});
