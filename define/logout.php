<?php
	
	require_once 'server/Auth/auth.php';

	User::logoutCurrentUser();
	header('Location: '.$baseUrl.'/login.php');
	exit;
?>