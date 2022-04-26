<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');



$data = json_decode(file_get_contents('php://input'));

$stuid = $data->stuid;
$firstname = $data->firstname;
$lastname = $data->lastname;
$othername = $data->othername;
$email = $data->email;
$phone_number = $data->phone_number;
$dob = $data->dob;
$level = $data->level;

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

if($firstname && $lastname && $email && $phone_number && $dob && $level){

    $sql = "INSERT INTO student(stuid, firstname, lastname, othername, email, phone_number, dob, level) VALUES('$stuid', '$firstname', '$lastname', '$othername', '$email', '$phone_number', '$dob', '$level')";
    
    $result = $db->prepare($sql);
    $result->execute();
    
    if($result){
        
        $response['data']=array('status'=>'Valid');
        echo json_encode($response);
    }
    else{
        
        $response['data']=array('status'=>'Invalid');
        echo json_encode($response);
    }
}