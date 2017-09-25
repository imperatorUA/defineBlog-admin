<?php	
	require_once("../Common/db_connect.php");
	require_once("../Auth/auth.php");

	$user = User::getCurrentUser();
	if($user->permissions['admin'] == 1) {
		$where = "WHERE u.activated = 1";
	} else {
		$where = "WHERE u.activated = 1 AND u.id = " . $user->id;
	}

	$sql = "
		SELECT 
			u.id, 
			u.email, 
			u.first_name, 
			u.last_name 
		FROM 
			users u $where
		";

	$res = $mysqli->query( $sql );
	$res->data_seek(0);

	$data = array();
	while ($row = $res->fetch_assoc()) {
		$data[]	= array("id" 			=> $row["id"], 
						"email" 		=> $row["email"],
						"first_name" 	=> $row["first_name"],
						"last_name" 	=> $row["last_name"]);	
	}
	
	echo json_encode($data);
?>