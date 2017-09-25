Ext.define('Define.User.UserController', {
    extend: 'Define.Common.BaseController',
    
    routes: {
        'User': 'onUserNavigate'
    },
    
    requires: [
        'Define.User.UserCard.UserCardView',
        'Define.Common.Views.ModalWindow',
        
        'Define.User.UserViewController',

        'Define.User.Model.UserModel',

        'Define.User.Store.UserGridStore'
    ],

    onUserNavigate: function () {
        Define.User.Store.UserGridStore.create().load();

        this.renderView('Define.User.UserView');
    }
});