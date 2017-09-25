Ext.define('Define.News.NewsCard.NewsCardView', {
    extend: 'Ext.form.Panel',
	alias: 'widget.newscardview',
	controller: 'NewsCardViewController',
	bodyPadding: 5,
	frame: false,
	
	defaults: {
		width: 700
	},

	initComponent: function() {
		this.callParent();
		this.add(this.newItems);
	},

	config: {
		id_new: ''
	},
	
	newItems: [{		
		xtype: 'textfield',
		name: 'title',
		fieldLabel: 'Заголовок',		
		labelWidth: 300
	}, {
		xtype: 'textarea',
		name: 'text',
		fieldLabel: 'Текст новости',		
		labelWidth: 300
	}/*, {
		xtype: 'datefield',
        anchor: '100%',
        //reference: 'dateDay',
        fieldLabel: 'Дата новости',
        labelWidth: 290,
        startDay: 1,
        format: 'H:i d.m.Y',
        value: Ext.Date.clearTime(new Date()),
        tooltip: 'Выбрать дату',
        margin: '10 10 10 10'
	}*/]
});