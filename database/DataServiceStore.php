<?php
include 'DBConfig.php';
 
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);


if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}


$Stype=$_GET['type'];

// if($Stype=='slide'){
//     $Sid=$_GET['id'];
//     $sql = "SELECT sl.* FROM store AS st LEFT JOIN slide AS sl 
//     ON st.id_store = st.id_store WHERE st.id_store = '$Sid' limit 5";
// }
if($Stype=='slide'){
    // $Sid=$_GET['id'];
    $sql = "SELECT sl.image FROM slide AS sl limit 5";
}else if($Stype=='sale') {
    $sql = "SELECT id_store , name , image , full_price , sale_price , discount FROM product LIMIT 6";
}else if($Stype=='newproduct') {
    $sql = "SELECT id_store , name , image , full_price , sale_price , discount  FROM product Order by date DESC  LIMIT 6";
}else if( $Stype == 'todayproduct' ){
    $sql = "SELECT id_store , name , image , full_price , sale_price , discount FROM product limit 20";
}else if($Stype == 'storedata') {
    $Sid=$_GET['id'];
    $sql = "SELECT name , id_store , image FROM store WHERE id_store = '$Sid'";
}else if($Stype == 'storedatadetail') {
    $Sid=$_GET['id'];
    $sql = "SELECT count(p.id_product) as count_prduct
            FROM store as s 
            LEFT JOIN product as p 
            ON s.id_store=p.id_store 
            WHERE s.id_store = '$Sid'";
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