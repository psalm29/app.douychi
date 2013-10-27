<?php
include('config.php');
mysql_connect($dbhost, $dbuser, $dbpass);
	
	mysql_select_db($dbname);
if(isset($_POST['sn'])) {
				  $name = mysql_real_escape_string(htmlentities(stripslashes($_POST['sn'])));
				  $pwd = sha1(mysql_real_escape_string(htmlentities(stripslashes($_POST['pwd']))));
				  
				  $query = mysql_query("SELECT * FROM seller WHERE name = '$name'");
				  $row = mysql_fetch_assoc($query);
				  if($row['name'] != $name) {
					  ?>
					     <script>
						 $('#login_error_loader').fadeOut("fast");
					  $('#login_error').text("<?php echo $name ?> does not exist in douychi");
                      	$('#login_error').fadeIn("slow");
					$('#login_error').delay(2800);
					$('#login_error').fadeOut("slow");
                      </script>
					  <?php
				  }elseif($row['name'] == $name && @$row['password'] != $pwd) {
					  ?>
					  <script>
					  $('#login_error_loader').fadeOut("fast");
					  $('#login_error').text("Password doesn't match seller's name");
                      	$('#login_error').fadeIn("slow");
					$('#login_error').delay(2800);
					$('#login_error').fadeOut("slow");
                      </script>
					  <?php
					 
				  }elseif($row['name'] == $name && @$row['password'] == $pwd && @$row['verified'] == '0') {
					  ?>
                      <script>
					  $('#login_error_loader').fadeOut("fast");
					  $('#login_error').text("<?php echo $name ?> email address is not yet verified. Check your email address and click on the verification link sent to you by Douychi.");
                      	$('#login_error').fadeIn("slow");
					$('#login_error').delay(2800);
					$('#login_error').fadeOut("slow");
                      </script>
					
					  <?php
				  }elseif($row['name'] == $name && $row['password'] == $pwd && $row['verified'] != '0') {
					  ?>
					  <script>
					  $(document).ready(function(){
						 
						
						$.mobile.changePage( 'sellerpage.html', { transition:'pop', changeHash: false });  
					  });
					  
					  </script>
					  <?php	    
				  }
			  } //end of if statement
			  else{
				  ?>
                      <script>
					  $('#login_error').text("All fields required.");
                      	$('#login_error').fadeIn("slow");
					$('#login_error').delay(2800);
					$('#login_error').fadeOut("slow");
                      </script>
                      
                      <?php
			  }
?>
