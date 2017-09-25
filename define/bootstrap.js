var bootstrap = {
    controllers: [
        'Define.News.NewsController',
        'Define.User.UserController'
    ]
}


Define.hasAccess = function (right) {
    var permissions = Define.currentUser.get('permissions');

    return !!permissions['superuser'] || !!permissions[right];
};