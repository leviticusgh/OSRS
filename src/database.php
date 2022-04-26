<?php

header('Access-Control-Allow-Origin: *');

$host = "localhost";
$database = "osrs";
$username = "root";
$password = "";

try{
    
    $dsn = "mysql:host=$host; dbname=$database";
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
}
catch(PDOException $e){
    echo "error".$e->getMessage();
}