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
	if($user->permissions['admin'] != 1) {
		echo 'Ошибка доступа';
	    throw new Exception();
	}

	function insert() {
		global
			$data,
			$mysqli
		;

		$title = $data->title;
		$text = $data->text;

		$sql = "
			INSERT INTO news (title,text,date_news) 
			VALUES ('$title','$text',NOW())
        ";

       	$mysqli->query( $sql );
        $id = $mysqli->insert_id;		

		$sql = "
			SELECT *
			FROM news
			WHERE id=$id
        ";

        $res = $mysqli->query( $sql );
        $res->data_seek(0);
        $row = $res->fetch_assoc();
        echo json_encode($row);
	}

	function update() {
		global
			$data,
			$mysqli
		;

		$text = $data->text;
		$title = $data->title;
		$id = $data->id;

		$sql = "
			UPDATE news n 
			SET n.text='$text', n.title='$title'
			WHERE n.id=$id
        ";
        $mysqli->query( $sql );
	}

	function delete() {
		global
			$data,
			$mysqli
		;

		$id = $data->id;
		$sql = "
			DELETE FROM news
        	WHERE id = $id
        ";
        $mysqli->query( $sql );
	}

	if($operation == 'I') {
		insert();
	}elseif ($operation == 'U') {
		update();
	}elseif ($operation == 'D') {
		delete();
	}

?>