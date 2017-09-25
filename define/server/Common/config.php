<?php

$config = json_decode(file_get_contents(__DIR__.'/../../config.json'));

/*$serverName = "localhost"; //"127.0.0.1"
$port = "3306";
$database = "mcr";
$user = "root";
$passw = "1";*/

$baseDir = $config->php->baseDir;
eval ("\$baseDir = $baseDir;");

$serverDir = $config->php->serverDir;
eval ("\$serverDir = $serverDir;");

$baseUrl = $config->php->baseUrl;
eval ("\$baseUrl = $baseUrl;");