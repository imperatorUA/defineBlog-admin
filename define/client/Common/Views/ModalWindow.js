Ext.define('Define.Common.Views.ModalWindow', {
    extend: 'Ext.window.Window',
	alias: 'widget.modalwindow',
	modal: true,
	closable: false,
	resizable: false,
	bodyPadding: 0,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	config: {
		showOkButton: true
	},
	
	initComponent: function(){
		this.callParent();
		
		this.add(this.initialConfig.content);
		this.down('#btnOk').setVisible(this.showOkButton);
	},
	
	buttons: [{
		text: 'Принять',
		iconCls: 'btn-tick',
		itemId: 'btnOk',
	}, {
		text: 'Отказ',
		iconCls: 'btn-crossscript',
		itemId: 'btnCancel'
	}],
	
	onRender: function () {
		this.down('#btnOk').handler = this.okButtonClick.bind(this);
		this.down('#btnCancel').handler = this.cancelButtonClick.bind(this);

		this.callParent();
	},
	
	okButtonClick: function () {
		var 
			form = this.down('form'); // get the form if exists
		;
		if (form){
			if (form.isValid()) {
				this.initialConfig.okCallback();
				this.destroy();
			} else {
				Ext.Msg.alert('Внимание!', 'Форма заполнена с ошибками.<br>Сохранение невозможно !');
			}
		} else {
			this.initialConfig.okCallback();
			this.destroy();
		}
	},
	
	cancelButtonClick: function () {
		this.initialConfig.cancelCallback();
		this.destroy();
	}
	
	
});