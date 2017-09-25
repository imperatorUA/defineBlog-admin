<?php
//require_once("utils.php");

require 'config.php';

$mysqli = new mysqli(
        $config->mysql->main_db->host,
        $config->mysql->main_db->user,
        $config->mysql->main_db->pass,
        $config->mysql->main_db->db, 
        $config->mysql->main_db->port
    );
if ($mysqli->connect_errno) {
    echo "Error MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset("utf8");
//logf($mysqli->host_info . "\n");
?>