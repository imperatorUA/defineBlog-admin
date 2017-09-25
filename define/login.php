<html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

  <title id="page-title">Авторизация</title>


  <!-- STYLESHEETS start-->
  <!-- Main css-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.0.0/build/classic/theme-classic/resources/theme-classic-all.css" />-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.0.0/build/classic/theme-crisp-touch/resources/theme-crisp-touch-all.css" />-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.0.0/build/classic/theme-crisp/resources/theme-crisp-all.css" />-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.2.0/build/classic/theme-neptune/resources/theme-neptune-all.css" />-->
	<link rel="stylesheet" type="text/css" href="../ext-6.2.0/build/classic/theme-triton/resources/theme-triton-all.css" />

  <!-- Custom css-->


  <style>
    .redRow {
      background-color: rgba(255, 0, 0, 0.6);
    }
    .greenRow {
      background-color: rgba(0, 198, 0, 0.08);
    }
    .yellowRow {
      background-color: rgba(255, 255, 0, 0.2);
    }
  </style>

	<script type="text/javascript" src="../ext-6.2.0/build/ext-all-debug.js"></script>
  <script type="text/javascript" src="../ext-6.2.0/build/classic/locale/locale-ru.js"></script>	


  <script type="text/javascript">
  Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
        title: 'Авторизация',
        height: 200,
        width: 500,
        layout: 'fit',
        draggable: false,
        resizable: false,
        closable: false,
        
        items: {  // Let's put an empty grid in just to illustrate fit layout
            xtype: 'form',
            url: 'server/Auth/signIn.php',
            bodyPadding: 5,
            layout: 'anchor',
            defaults: {
              anchor: '100%'
            },
            defaultType: 'textfield',
            standardSubmit: true,

              items: [{
                fieldLabel: 'Логин',
                name: 'email',
                allowBlank: false,
                autofocus: true,
                listeners: {
                afterrender: function (f) {
                  f.focus();
                }
              }
          }, {
              fieldLabel: 'Пароль',
              name: 'pswd',
              inputType: 'password',
              allowBlank: false
          }],

          buttons: [{
              text: 'Войти',
              //formBind: true, //only enabled once the form is valid
              //disabled: true,
              handler: function() {
                  var form = this.up('form').getForm();
                  if (form.isValid()) {
                      form.submit();
                  }
              }
          }]
        }
     }).show();   
  })
  </script>
  
</head>
<body>
</body>
</html>