<?php	
	require_once("../Common/db_connect.php");
	require_once("../Auth/auth.php");
	
	if ( !isset($_POST['data']) ){
		exit();
	}
	$data = json_decode ($_POST['data']);

	
	if ( !isset($_POST['operation']) ){
		exit();
	}
	$operation = $_POST['operation'];

	$user = User::getCurrentUser();
function insert() {
	global
		$data,
		$operation,
		$user
	;
	try
	{	
	if($user->permissions['admin'] != 1){
		echo 'Ошибка доступа';
	    throw new Exception();
	}
		$admin = 0;
		if($data->admin){
			$admin = 1;
		}

	    // Create the user
	    $user = Sentry::createUser(array(
	        'email'     => $data->email,//логин
	        'password'  => $data->password,	        
	        'activated' => true,
	        'first_name' => $data->first_name,
    		'last_name' => $data->last_name, 
	        'permissions' => array(
	            'admin' => $admin
	        )
	    ));

	    echo json_encode(array( 'id' 	 		=> $user->id, 
	    					    'email'	 		=> $user->email,
	    					    'first_name'	=> $user->first_name,
	    					    'last_name'		=> $user->last_name,
	    					    'operation' 	=> $operation));

	}
	catch (Cartalyst\Sentry\Users\LoginRequiredException $e)
	{
	    echo 'Login field is required.';
	    throw new Exception();
	}
	catch (Cartalyst\Sentry\Users\PasswordRequiredException $e)
	{
	    echo 'Password field is required.';
	    throw new Exception();
	}
	catch (Cartalyst\Sentry\Users\UserExistsException $e)
	{
	    echo 'User with this login already exists.';
	    throw new Exception();
	}
	catch (Cartalyst\Sentry\Groups\GroupNotFoundException $e)
	{
	    echo 'Group was not found.';
	    throw new Exception();
	}
}

function update() {
	global
		$data,
		$operation,
		$user
	;
	
	if($user->permissions['admin'] != 1 && $user->id != $data->id) {
		echo 'Ошибка доступа';
	    throw new Exception();
	}
	try
	{
    // Find the user using the user id
    $user1 = Sentry::findUserById($data->id);
    if($data->last_name != ""){
    	$user1->password = $data->password;
    }
    // Update the user details
    $user1->email = $data->email;
    $user1->first_name = $data->first_name;
	$user1->last_name = $data->last_name;

    // Update the user
	    if ($user1->save())
	    {
	        // User information was updated
    	    echo json_encode(array( 'id'	 		=> $user1->id,
    	    						'email'	 		=> $user1->email,
								    'first_name'	=> $user1->first_name,
								    'last_name'		=> $user1->last_name,
								    'operation' 	=> $operation));
	    }
	    else
	    {
	        // User information was not updated
			echo 'Ошибка ';
		    throw new Exception();
	    }
	}
	catch (Cartalyst\Sentry\Users\UserExistsException $e)
	{
	    echo 'User with this login already exists.';
	    throw new Exception();
	}
	catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
	{
	    echo 'User was not found.';
	    throw new Exception();
	}
}

function delete() {
	global
		$data,
		$operation,
		$user,
		$mysqli
	;
	if($user->permissions['admin'] != 1) {
		echo 'Ошибка доступа';
	    throw new Exception();
	}
	try
	{
	    $user1 = Sentry::findUserById($data->id);
	    //$user1->delete();
	    $id = $data->id;

		$sql = "
			UPDATE users u
			SET u.activated = 0
			WHERE u.id = $id";

		$res = $mysqli->query( $sql );

	    echo json_encode(array( 'id'	 		=> $user1->id,
								'operation' 	=> $operation));
	}
	catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
	{
	    echo 'User was not found.';
	    throw new Exception();
	}
	
}

if ($operation == "I"){
	insert();
} else if ($operation == "U"){
	update();
} else if ($operation == "D"){
	delete();
}

?>