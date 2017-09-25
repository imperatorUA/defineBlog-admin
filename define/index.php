<?php 

require_once 'server/Auth/auth.php';

$user = User::getCurrentUser();


function permissionsFilter($var) {
  return $var > 0;
}

// echo json_encode(array_filter($user->getMergedPermissions(), "permissionsFilter"));
// exit;


if (is_null(User::getCurrentUser())) {
    header('Location: '.$baseUrl.'/login.php');
    exit;
}


?>
<html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

  <title id="page-title">Define</title>


  <!-- STYLESHEETS start-->
  <!-- Main css-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.0.0/build/classic/theme-classic/resources/theme-classic-all.css" />-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.0.0/build/classic/theme-crisp-touch/resources/theme-crisp-touch-all.css" />-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.0.0/build/classic/theme-crisp/resources/theme-crisp-all.css" />-->
	<!--<link rel="stylesheet" type="text/css" href="../ext-6.2.0/build/classic/theme-neptune/resources/theme-neptune-all.css" />-->
	<link rel="stylesheet" type="text/css" href="../ext-6.2.0/build/classic/theme-triton/resources/theme-triton-all.css" />

  <link rel="stylesheet" type="text/css" href="images/img.css" />
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

  <script type="text/javascript" src="client/Common/BaseController.js"></script>
  <script type="text/javascript" src="client/Common/BaseModel.js"></script>
  <script type="text/javascript" src="client/Common/BaseStore.js"></script>
  
  <script type="text/javascript" src="bootstrap.js"></script>
  <script type="text/javascript" src="app.js"></script>

<!-- <?php
  if(extension_loaded('sockets')) echo "WebSockets OK";
  else echo "WebSockets UNAVAILABLE";
?> -->


<?php 
echo '<script type="text/javascript">';
$user = User::getCurrentUser();
echo "Define.user = "; 
if($user->permissions['admin'] == 1){
  echo "1";
} else {
  echo "0";
}
echo '</script>';
?>
</head>
<body>
</body>
</html>