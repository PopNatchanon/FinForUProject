<?php
include 'DBConfig.php';
 
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);


if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}


$Stype=$_GET['type'];

if($Stype=='store'){
    $idproduct=$_GET['id_product'];
    $sql = "SELECT p.image as p_image ,p.name as p_name ,p.full_price,p.id_store as p_id_store ,p.id_product,p.detail, p.type ,s.name as s_name ,s.image as s_image ,s.id_store as s_id_store  
    from product as p 
    left join store as s
    on p.id_store = s.id_store 
    where p.id_product = '$idproduct'";
}else if($Stype=='view'){
    $sql = "SELECT * FROM  reviews ";
}
// else if($Stype=='countstore'){
//     $Sid=$_GET['id'];
//     $sql = "SELECT Count(*) FROM product as p LEFT JOIN store as s ON p.id_store=s.id_store 
//     WHERE p.id_store = '$Sid'";
// }


$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem, JSON_UNESCAPED_UNICODE);

 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>