<?php	
	require_once("../Common/db_connect.php");
	require_once("../Auth/auth.php");

	if ( !isset($_GET['id']) ){
		exit();
	}
	$id = $_GET['id'];

	$user = User::getCurrentUser();

	if($user->permissions['admin'] == 1 || $user->id == $id){
	try {
		$user1 = Sentry::findUserById($id);
		echo json_encode(array('id'  		=> $user1->id,
							   'email'  	=> $user1->email,
							   'first_name' => $user1->first_name,
							   'last_name'  => $user1->last_name,
							   'admin' 	    => $user->permissions['admin']));

	}
	catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
	{
	    echo 'User was not found.';
	    throw new Exception();
	}

	} else {
		echo "Умник, уваливай!";
		throw new Exception();
	}

?>