<?php

require_once 'auth.php';

if (!is_null(User::getCurrentUser())) {
	header('Location: '.$baseUrl.'/index.php');
	exit;
}

if (!isset($_POST['email'])) {
	header('Location: '.$baseUrl.'/login.php');
}
$email = $_POST['email'];
if (!isset($_POST['pswd'])) {
	header('Location: '.$baseUrl.'/login.php');
}
$pswd = $_POST['pswd'];

try {

	User::signInUser($email, $pswd);
	echo "string";
	header('Location: '.$baseUrl.'/index.php');
}
catch (Cartalyst\Sentry\Users\WrongPasswordException $e)
{
    header('Location: '.$baseUrl.'/login.php?errorMessage=Wrong password, try again.');
    exit;
}
catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
{
	header('Location: '.$baseUrl.'/login.php?errorMessage=User was not found.');
	exit;
}
catch (Cartalyst\Sentry\Users\UserNotActivatedException $e)
{
	header('Location: '.$baseUrl.'/login.php?errorMessage=User is not activated.');
	exit;
}
catch (Cartalyst\Sentry\Users\LoginRequiredException $e)
{
    header('Location: '.$baseUrl.'/login.php?errorMessage=Login field is required.');
	exit;
}
catch (Cartalyst\Sentry\Users\PasswordRequiredException $e)
{
    header('Location: '.$baseUrl.'/login.php?errorMessage=Password field is required.');
	exit;
}