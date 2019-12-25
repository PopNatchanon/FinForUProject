<?php 
include 'DBConfig.php';
 
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);


if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}


$Stype=$_GET['type'];

if($Stype=='slide'){
    $sql = "SELECT image , image_path FROM slide_copy limit 5";
}else if($Stype=='type'){
    $sql = "SELECT name ,  image_menu  FROM type ";
}else if($Stype=='sale') {
    $sql = "SELECT id_product , id_store , name , image , full_price , sale_price , discount FROM product LIMIT 6";
}else if($Stype=='store') {
    $sql = "SELECT id_store , image , name FROM store  LIMIT 6";
}else if($Stype=='product') {
    $sql = "SELECT id_product , id_store , name , image , full_price , sale_price , discount  FROM product Order by date DESC  LIMIT 6";
}else if( $Stype == 'todayproduct' ){
    $sql = "SELECT id_product , id_store , name , image , full_price , sale_price , discount FROM product limit 20";
}else if($Stype=='brand'){
    $sql = "SELECT image , image_path  FROM slide WHERE type_icon = 'promotions' AND status_active = '1'  limit 6 ";
}else if($Stype=='foryou') {
    $sql = "SELECT image ,name ,sale_price, image_path FROM product limit 10 ";
}else if( $Stype == 'categorylist' ) {
    $sql = "SELECT name , image_head  FROM type ";
}else if($Stype == 'categoryproduct' ) {
    $Sproduct = $_GET['product'];
    $sql = "SELECT id_product , id_store , name , image , full_price , sale_price , discount , type FROM product WHERE type = '$Sproduct' limit 6";
}else if($Stype=='Confidential_PRO'){
    $sql = "SELECT image , image_path  FROM slide WHERE type_icon = 'Confidential_PRO' AND status_active = '1'  limit 3 ";
}
 
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