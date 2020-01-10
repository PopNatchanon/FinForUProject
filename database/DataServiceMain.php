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
    case 'slide':
        $sql = "SELECT image , image_path FROM slide_copy limit 5";
        break;
    case 'type':
        $sql = "SELECT name ,  image_menu  FROM type ";
        break;
    case 'sale':
        $sql = "SELECT id_product , id_store , name , image , image_path, full_price , sale_price , discount FROM product LIMIT 6";
        break;
    case 'store':
        $sql = "SELECT id_store , image , name FROM store  LIMIT 6";
        break;
    case 'product':
        $sql = "SELECT id_product , id_store , name , image ,image_path, full_price , sale_price , discount  FROM product Order by date DESC  LIMIT 6";
        break;
    case 'todayproduct':
        $sql = "SELECT id_product , id_store , name , image ,image_path, full_price , sale_price , discount FROM product limit 20";
        break;
    case 'brand':
        $sql = "SELECT image , image_path  FROM slide WHERE type_icon = 'promotions' AND status_active = '1'  limit 6 ";
        break;
    case 'foryou':
        $sql = "SELECT image ,name ,full_price, image_path FROM product limit 10 ";
        break;
    case 'categorylist':
        $sql = "SELECT name , image_head  FROM type ";
        break;
    case 'categoryproduct':
        $Sproduct = $obj->product;
        $sql = "SELECT id_product , id_store , name , image ,image_path, full_price , sale_price , discount , type FROM product WHERE type = '$Sproduct' limit 6";
        break;
    case 'Confidential_PRO':
        $sql = "SELECT image , image_path  FROM slide WHERE type_icon = 'Confidential_PRO' AND status_active = '1'  limit 3 ";
        break;
}
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
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