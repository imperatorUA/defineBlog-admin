Ext.define('Define.News.NewsViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.NewsViewController',
    
    init: function(view) {
    	Define.News.Store.NewsGridStore.create().load({
            callback: function() {
            	view.lookupReference('newsGrid').setStore(Ext.getStore('newsGridStore'));            	
            }
        });
    },

    onRefreshNews: function() {
    	Ext.getStore('newsGridStore').load();
    },

    onAddNew: function() {
        var 
            me = this
        ;
        this.cardFormView = Define.News.NewsCard.NewsCardView.create();
        this.newsModel = Define.News.Model.NewsModel.create();

        me.cardFormView.loadRecord(me.newsModel);
        //Отрисовываем форму в окне
        Define.Common.Views.ModalWindow.create({
            title: 'Добавить новость ',
            okCallback: me.addNewCallback.bind(me),
            cancelCallback:  function () {},
            content: me.cardFormView
        }).show();
    },

    addNewCallback: function() {
        var
            me = this
        ;

        this.cardFormView.updateRecord();

        this.newsModel.saveNews('I', function(response) {
            var
                data = Ext.JSON.decode(response.responseText)
            ;

            Ext.getStore('newsGridStore').add({
                id: data.id,
                title: data.title,
                text: data.text,
                date_news: data.date_news
            });

            me.successToast('Новость сохраненна');
        });
    },

    onEditNew: function(view, rowIndex, colIndex, item, e, record, row) {
        var 
            me = this,
            data = record.getData()
        ;
        this.cardFormView = Define.News.NewsCard.NewsCardView.create();

        this.newsModel = Define.News.Model.NewsModel.create({
            id: data.id,
            text: data.text,
            title: data.title
        });

        me.cardFormView.loadRecord(me.newsModel);
        //Отрисовываем форму в окне
        Define.Common.Views.ModalWindow.create({
            title: 'Редактировать новость ',
            okCallback: me.editNewCallback.bind(me),
            cancelCallback:  function () {},
            content: me.cardFormView
        }).show();
    },

    editNewCallback: function() {
        var
            me = this
        ;

        this.cardFormView.updateRecord();

        this.newsModel.saveNews('U', function() {

            Ext.getStore('newsGridStore').findRecord('id', me.newsModel.get('id')).set({
                text: me.newsModel.get('text'),
                title: me.newsModel.get('title')
            });
            Ext.getStore('newsGridStore').commitChanges();
            me.successToast('Новость изменена');       
        });
    },

    onDeleteNew: function (view, rowIndex, colIndex, item, e, record, row) {
        var 
            me = this,
            confirmText = 'Вы действительно хотите удалить новость?'
        ;

        Ext.Msg.confirm('Подтверждение', confirmText, function(btn) {
            if (btn==='yes') {
                me.newsModel = Ext.create('Define.News.Model.NewsModel', {
                    id: record.getId()
                });

                me.newsModel.saveNews('D', function() {
                    Ext.getStore('newsGridStore').remove(record);
                    me.successToast('Новость удаленна');
                });
            }
        });
    },

    successToast: function(text) {

        Ext.toast({
            html: text,
            title: false,
            align: 't',
            bodyStyle: 'color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;'
        });

    }
});