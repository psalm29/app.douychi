<?php
$host = 'localhost';
$user = 'root';//douychic_psalm29
$pwd = 'chiaka';//psalm294u
$db  = 'douychi';//douychic_db

mysql_connect('$host', '$user', '$pwd');
mysql_select_db('$db');

if(isset($_POST['user'])){
$user = mysql_real_escape_string(htmlentities(stripslashes($_POST['user'])));

$pwd = sha1(mysql_real_escape_string(htmlentities(stripslashes($_POST['pwd']))));
				  $logged = $_POST['logged'];
				  
				  $query = mysql_query("SELECT * FROM seller WHERE name = '$user'");
				  $row = mysql_fetch_assoc($query);
				  if($row['name'] != $user) {
					   echo 'exist';
					  loginForm();
				  }else if($row['name'] == $name && @$row['password'] != $pwd) {
					  
						 echo 'password';
					  
					  loginForm();
				  }else if($row['verified'] == '0') {
					 echo 'verify';
					  loginForm();
				  }else if($row['name'] == $name && $row['password'] == $pwd && $row['verified'] != '0'){
					  echo 'good';
					  }					    
				
}

?>