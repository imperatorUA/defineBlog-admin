Ext.define('Define.User.UserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserViewController',
    
    init: function(view) {
    	var 
    		grid = view.lookupReference('userGrid')
    	;
    	if(Define.user == 1){

			grid.addTool({
	            type: 'plus',
	            tooltip: 'Добавить',
	            handler: 'onAddUser'
	        })
			grid.getHeaderContainer().add({//нету метода добавить колонку пришлось извращатся 
	            xtype: 'actioncolumn',
	            width: 25,
	            sortable: false,
	            menuDisabled: true,
	            items: [{
	                iconCls: 'btn-remove',
	                tooltip: 'Удалить Пользователя',
	                handler: 'onDeleteUser'
	            }]
	        })
    	}

    	grid.setStore(Ext.getStore('userGridStore'));
    },

	afterRender: function () {
		
	}, 

	
	onAddUser: function(view, rowIndex, colIndex, item, e, record, row) {
		var
			me = this
		;
		//Модель
		this.userModel = Define.User.Model.UserModel.create();
		
		//Форма ввода
		this.cardFormView = Define.User.UserCard.UserCardView.create();
		this.cardFormView.loadRecord(this.userModel);

		Define.Common.Views.ModalWindow.create({
			title: 'Новый пользователь',
			okCallback: me.onSaveUserCalback.bind(me, 'I'),
			cancelCallback:  function () {
				//Очистка
				me.userModel.destroy();
				me.userModel = null;
			},
			content: me.cardFormView
		}).show();
	},

	onSaveUserCalback: function(operation) {
		//Переносим данные из формы в модель
		this.cardFormView.updateRecord();
		this.userModel.saveUser(operation);
	},

	onEditUser: function(view, rowIndex, colIndex, item, e, record, row) {
		var
			me = this
		;
		//Модель
		Define.User.Model.UserModel.create().load({
			params: {
				id: record.getId()
			},

			success: function(response) {
				me.userModel = response;
				me.cardFormView = Define.User.UserCard.UserCardView.create();
				me.cardFormView.loadRecord(me.userModel);

				Define.Common.Views.ModalWindow.create({
					title: 'Редактировать пользователя',
					okCallback: me.onSaveUserCalback.bind(me, 'U'),
					cancelCallback:  function () {},
					content: me.cardFormView
				}).show();
            },

            failure: function(response){
            	Ext.toast({
	                html: 'Ошибка!',
	                title: false,
	                align: 't',
	                bodyStyle: 'color: #a94442; background-color: #f2dede; border-color: #ebccd1;'
	            });
            }
		});
		
	},

	onDeleteUser: function(view, rowIndex, colIndex, item, e, record, row)  {
		var 
            confirmText = 'Вы действительно хотите удалить пользователя: '+ '<B><U><I>' + 
            record.get('email') + ' </I></U></B> ?',
            me = this,
            data = record.getData()
        ;

        Ext.Msg.confirm('Подтверждение', confirmText, function(btn){
            if (btn==='yes') {
                var 
                    userModel = Define.User.Model.UserModel.create();
                ;

                userModel.set(record.getData());
                userModel.saveUser('D');
            }
        });
	}
});