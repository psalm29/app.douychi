<?php
include 'config.php';
/*
$sql = "SELECT * FROM products ";
*/
$sql = "select e.id, e.name, e.category, e.amount, e.status, e.image, e.seller, e.seller_address, e.phone, " .
		"e.email, e.picture, m.firstName managerFirstName, m.lastName managerLastName, count(r.id) reportCount " . 
		"from products e left join products r on r.managerId = e.id left join employee m on e.managerId = m.id " .
		"where e.id=:id group by e.name order by e.name, e.name";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$employee = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($employee) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>