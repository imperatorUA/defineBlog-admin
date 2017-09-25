Ext.define('Define.News.Store.NewsGridStore', {
    extend: 'Define.Common.BaseStore',
    storeId: 'newsGridStore',
    model: 'Define.News.Model.NewsModel',
	autoload: false,

    proxy: {
        type: 'ajax',
        url: 'server/News/getNews.php',
        reader: {
            type: 'json'
        }
    }
});