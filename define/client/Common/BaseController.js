Ext.define('Define.Common.BaseController', {
    extend: 'Ext.app.Controller',

    renderView: function (viewContext) {
        if (this.superclass.view) {
            Ext.getCmp('centerContainer').removeAll(true);
            this.superclass.view.destroy();

            this.view = null;
        }

        Ext.require(viewContext, function () {
            this.superclass.view = this.view = Ext.create(viewContext);
            
            Ext.getCmp('centerContainer').add(this.superclass.view);
        }.bind(this));
    }

});