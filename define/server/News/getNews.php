<?php
	require_once("../Common/db_connect.php");

	$sql = "
		SELECT
		  *
		FROM
		  news
		ORDER BY date_news DESC
	";

	$data = array();
	$res = $mysqli->query( $sql );
	if ($res->num_rows > 0){
		$res->data_seek(0);
		while ($row = $res->fetch_assoc()) {
			$data[] = $row;
		}
	}

	echo json_encode($data);
?>