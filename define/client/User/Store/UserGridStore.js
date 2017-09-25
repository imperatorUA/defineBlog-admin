Ext.define('Define.User.Store.UserGridStore', {
    extend: 'Define.Common.BaseStore',
    storeId: 'userGridStore',
    autoload: false,
	model: 'Define.User.Model.UserModel',
	
    proxy: {
        type: 'ajax',
        url: 'server/User/getAllUsers.php',
        reader: {
            type: 'json'
        }
    }
});