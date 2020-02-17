<?php 
include 'DBConfig.php';
 
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);


if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}


$obj = json_decode(file_get_contents("php://input"));

$Stype = $obj->type;

switch ($Stype) {
    case 'email':
        $email = $obj->email;
        $sql = "SELECT COUNT(email) AS c_email FROM customer WHERE email = '$email' ";
        break;
}

$result = $conn->query($sql);
 
if ($result->num_rows>0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem, JSON_UNESCAPED_UNICODE);

 }
 
} else {
    echo "{}";
}
 echo $json;
$conn->close();
?>