Ext.define('Define.User.UserCard.UserCardView', {
    extend: 'Ext.form.Panel',
	alias: 'widget.usercard',
	//controller: 'UserCardViewController',
	bodyPadding: 5,
	frame: false,
	
	defaults: {
		width: 600
	},

	initComponent: function() {
		this.callParent();
		this.add(this.newItems);
	},
	
	newItems: [{		
		xtype: 'textfield',
		name: 'email',
		fieldLabel: 'Логин',	
		allowBlank: false,	
		labelWidth: 200
	}, {
		xtype: 'textfield',
		name: 'password',
		allowBlank: false,
		fieldLabel: 'Пароль',		
		labelWidth: 200
	}, {
		xtype: 'textfield',
		name: 'first_name',
		fieldLabel: 'Имя',		
		labelWidth: 200
	}, {
		xtype: 'textfield',
		name: 'last_name',
		fieldLabel: 'Фамилия',		
		labelWidth: 200
	}]
});