Ext.define('Define.News.NewsController', {
    extend: 'Define.Common.BaseController',
    
    routes: {
        'News': 'onNewsNavigate'
    },

    requires: [
        'Define.News.NewsView',
        'Define.News.NewsCard.NewsCardView',

        'Define.News.NewsViewController',
        'Define.News.NewsCard.NewsCardViewController',

        'Define.News.Model.NewsModel',

        'Define.News.Store.NewsGridStore'
    ],

    onNewsNavigate: function () {
        this.renderView('Define.News.NewsView');
    }
});