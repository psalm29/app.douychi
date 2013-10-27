<?php
include 'config.php';
$min = $_REQUEST['min'];
$max = $_REQUEST['max'];

$sql = "SELECT * FROM products WHERE amount >= '$min' && amount <= '$max'";
try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	
	?>
    <li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src="pics/' + products.image + '"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>
                    <?php 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}
?>

