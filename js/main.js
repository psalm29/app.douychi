
var serviceURL = "http://www.douychi.com/services/";/////http://localhost/TestingFinal6/services/
//var id = getUrlVars()["id"];

var pictureSource;   // picture source
var destinationType;


var products;
var syncing = true;
var stillLoading = false;
var pdtcategory = 0;
var sellername;
var id;
var detailpage = false;
var sellerpage = false;
function getsellerlist(){
		$.mobile.loading("show");
	stillLoading = true;
	console.log(stillLoading);
	console.log(serviceURL);
	$.getJSON(serviceURL + 'sellerlist.php', {name: sellername}, function(data) {
	
		
		
		$('#sellerlist li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#sellerlist').append('<li>' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src=" http://douychi.com/'+ products.mypic +'"/>' +
					'<h2>' + products.name + '</h2>' +
					
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></li>');
		});
		stillLoading = false;
		console.log(stillLoading);
		$.mobile.loading( "hide" );
		
		$('#sellerlist').listview('refresh');
		//
	});
	
}
function getaccessoriesList() {
	$.mobile.loading("show");
	stillLoading = true;
	console.log(stillLoading);
	console.log(serviceURL);
	$.getJSON(serviceURL + 'accessories_category.php', function(data) {
	
		
		
		$('#employeeList li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#employeeList').append('<li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src=" http://douychi.com/'+ products.mypic +'"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>');
		});
		stillLoading = false;
		console.log(stillLoading);
		$.mobile.loading( "hide" );
		
		$('#employeeList').listview('refresh');
		//
	});
}

function getlaptopsList() {
	$.mobile.loading("show");
	stillLoading = true;
	$.getJSON(serviceURL + 'laptops_category.php', function(data) {
	
		
		
		$('#employeeList li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#employeeList').append('<li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src="http://douychi.com/'+ products.image +'"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>');
		});
		stillLoading = false;
		console.log(stillLoading);
		$.mobile.loading( "hide" );
		
		$('#employeeList').listview('refresh');
		//
	});
}
function gettabletList() {
	$.mobile.loading("show");
	stillLoading = true;
	$.getJSON(serviceURL + 'tablet_category.php', function(data) {
	
		
		
		$('#employeeList li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#employeeList').append('<li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src="http://douychi.com/'+ products.image +'"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>');
		});
		stillLoading = false;
		console.log(stillLoading);
		$.mobile.loading( "hide" );
		
		$('#employeeList').listview('refresh');
		//
	});
}
function getmobileList() {
	$.mobile.loading("show");
	stillLoading = true;
	$.getJSON(serviceURL + 'mobile_category.php', function(data) {
	
		
		
		$('#employeeList li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#employeeList').append('<li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src="http://douychi.com/'+ products.image +'"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>');
		});
		stillLoading = false;
		console.log(stillLoading);
		$.mobile.loading( "hide" );
		
		$('#employeeList').listview('refresh');
		//
	});
}
function getsmartList() {
	$.mobile.loading("show");
	stillLoading = true;
	$.getJSON(serviceURL + 'smart_category.php', function(data) {
	
		
		
		$('#employeeList li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#employeeList').append('<li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src="http://douychi.com/'+ products.image +'"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>');
		});
		stillLoading = false;
		console.log(stillLoading);
		$.mobile.loading( "hide" );
		
		$('#employeeList').listview('refresh');
		//
	});
}
function getproductdetails(){
	$.mobile.loading( "show");
	stillLoading = true;
	id = getUrlVars()["id"];
	console.log('id = ' + id );
	$.getJSON(serviceURL + 'productdetails.php', {name: id}, function(data){
		
	console.log('RESTful successful opened');
	products = data.items;
		
		$.each(products, function(index, products) {
	console.log(products.image);
	$('#pd_pic').attr('src', 'http://www.douychi.com/' + products.image);
	$('#pd_pdtname').text(products.name);
	$('#pd_compylogo').attr('src', 'http://www.douychi.com/' + products.seller_image);
	$('#pdtpricevalue').text(products.amount);
	if(products.status == 0){
		$('#pd_pdtavblevalue').text('Yes');
	}else{
		$('#pd_pdtavblevalue').text('No');
	}
	$('#pd_pddpvalue').text(products.description);
	$('#sellername').text(products.seller);
	$('#selleraddress').text(products.seller_address);

	$('#tel').attr('href', 'tel:'+ products.phone + '');
	$('#mailto').attr('href', 'mailto:'+ products.email + '');
	$('#sms').attr('href', 'sms:'+ products.phone + '');
	//$('#pd_compylogo').attr('src', 'img/images/' + products.picture);
	$.mobile.loading( "hide" );
	
		});
	});
	
	
	}



function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
		
    }
    return vars;
}
$('#Pdt_page').live('pageshow', function(event) {
	
	//renderproductdetails();
	detailpage = true;
	getproductdetails();
	
	document.addEventListener("backbutton", onBackKeyDown, false);
	});
////-------------------------------------------------------------login system------------------------------------------

$('#loginDialog').live('pageshow', function(event) {
	document.addEventListener("backbutton", onBackKeyDown, false);
	detailpage = false;
	sellerpage = false;
	$(document).ready(function() {
		$('#form form').submit(function(){
			$('#login_error_loader').fadeIn("fast");
			$('#loginMessege').load('http://www.douychi.com/services/test.php', { 'sn': $('#name').val(), 'pwd': $('#pwd').val()});//http://douychi.com/services/test.php
			sellername = $('#name').val();					
			return false;
		});
		
		
	});
	
		
	
	}); 
////-------------------------------------------------------------login system------------------------------------------------



$('#bar').live('pageshow', function(event) {
	detailpage = false;
	sellerpage = false;
	//getEmployeeList();
	$(document).ready(function() {
		$('#advanceSearch form').submit(function(){
			$('#employeeList').empty();
			$('#employeeList').load('http://douychi.com/services/advanceSearch.php', { 'min': $('#min').val(), 'max': $('#max').val()});						
			return false;
			
		});
				
				});
	document.addEventListener("backbutton", onBackKeyDown, false);	
});

$('#sellerpage').live('pageshow', function(event) {
		detailpage = false;
		sellerpage = true;
	$('#seller_nm').text('Welcome '+sellername);
	getsellerlist();
	document.addEventListener("backbutton", onBackKeyDown, false);
});	
			

$('#bar').live('pageshow', function(event) {
	detailpage = false;
	sellerpage = false;
	$('#mpa').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255,0)), color-stop(1, rgba(255, 255, 255, 0)))");
	$('#pc').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255,0)), color-stop(1, rgba(255, 255, 255, 0)))"); 
	$('#ta').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255,0)), color-stop(1, rgba(255, 255, 255, 0)))");
	$('#sp').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255,0)), color-stop(1, rgba(255, 255, 255, 0)))"); 
	$('#mp').css("background-image","-webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255,0)), color-stop(1, rgba(255, 255, 255, 0)))"); 
////////------click------///////	 
	$('#mpa').click(function(){ 
	
		 $('#mpa').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255)), color-stop(1, rgba(255, 255, 255, 0)))"); 
		 $('#pdcatgyactivename').text("Mobile accessories");
		 getaccessoriesList();
		pdtcategory = 5;
		console.log(pdtcategory);
	
	});
	$('#pc').click(function(){
		  $('#pc').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255)), color-stop(1, rgba(255, 255, 255, 0)))"); 
		  $('#pdcatgyactivename').text("PC");
		  getlaptopsList();
		  pdtcategory = 4;
		  console.log(pdtcategory);
	});
	$('#ta').click(function(){  
		$('#ta').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255)), color-stop(1, rgba(255, 255, 255, 0)))"); 
		$('#pdcatgyactivename').text("Tablets");
		gettabletList();
		pdtcategory = 3;
		console.log(pdtcategory);
	});
	$('#sp').click(function(){  
		$('#sp').css("background-image"," -webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255)), color-stop(1, rgba(255, 255, 255, 0)))");
		$('#pdcatgyactivename').text("Smart phones");
		getsmartList();
		 pdtcategory = 2;
		 console.log(pdtcategory);
	});
	$('#mp').click(function(){  
		$('#mp').css("background-image","-webkit-gradient( linear, left bottom, right bottom, color-stop(0, rgb(255,255,255)), color-stop(1, rgba(255, 255, 255, 0)))"); 
		$('#pdcatgyactivename').text("Mobile phones");
		getmobileList();
		pdtcategory = 1;
		console.log(pdtcategory);
	});

	
	
	
	
	////--------------hover event----------------------------------
	$('#mpa').hover(
	function(){ $('#mpa').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#mpa').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#pc').hover(
	function(){ $('#pc').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#pc').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#ta').hover(
	function(){ $('#ta').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#ta').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#sp').hover(
	function(){ $('#sp').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#sp').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#mp').hover(
	function(){ $('#mp').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#mp').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
document.addEventListener("backbutton", onBackKeyDown, false);	
});
$('#foo').live('pageshow', function(event) {
	detailpage = false;
	sellerpage = false;
	$('#mpa_btn').click(function(){  $('#mpa_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });
	$('#pc_btn').click(function(){  $('#pc_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });
	$('#ta_btn').click(function(){  $('#ta_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });	
	$('#sp_btn').click(function(){  $('#sp_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });		
	$('#mp_btn').click(function(){  $('#mp_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });		
	
	////--------------hover event----------------------------------
	$('#mpa_btn').hover(
	function(){ $('#mpa_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#mpa_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#pc_btn').hover(
	function(){ $('#pc_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#pc_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#ta_btn').hover(
	function(){ $('#ta_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#ta_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#sp_btn').hover(
	function(){ $('#sp_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#sp_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#mp_btn').hover(
	function(){ $('#mp_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#mp_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	
	
/////-----------------link to next page from home pg(product page base on Category click)------------------------------------
	$('#mpa_btn').click(function(){ 

	$.mobile.changePage( "#bar", { transition: "pop", changeHash: false });
	
	getaccessoriesList();
	 pdtcategory = 5;
	console.log(pdtcategory);
	});
	
	$('#pc_btn').click(function(){  
	
	
			$.mobile.changePage( "#bar", { transition: "pop", changeHash: false });
			getlaptopsList();
			pdtcategory = 4;
	
	console.log(pdtcategory);
	
	});
	$('#ta_btn').click(function(){  
	
			$.mobile.changePage( "#bar", { transition: "pop", changeHash: false });
			gettabletList();
			 pdtcategory = 3;
	console.log(pdtcategory);
	
	 });	
	$('#sp_btn').click(function(){ 
	
			$.mobile.changePage( "#bar", { transition: "pop", changeHash: false });
			getsmartList();
		 pdtcategory = 2;
	console.log(pdtcategory);
	
	 });		
	$('#mp_btn').click(function(){  
	
			$.mobile.changePage( "#bar", { transition: "pop", changeHash: false });
			getmobileList();
			 pdtcategory = 1;
	console.log(pdtcategory);
	
	
	});		
	
/////------------------link to next page home pg(product page base on Category click------------------------------------

	
	





document.addEventListener("backbutton", onBackKeyDown, false);


});


	



	
	
	

function onLoad() {
		
		document.addEventListener("deviceready", onDeviceReady, false);
		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);
        document.addEventListener("backbutton", onBackKeyDown, false);
		
		
		
    }

function onDeviceReady() {
		
     
		
		
				$('#mpa_btn').hover(
						function(){ $('retrybtn').css("background-image","-webkit-gradient(linear,left top,left bottom,from(#535252),to(#000000))"); }
						,
						function(){ $('retrybtn').css("background-image","-webkit-gradient(linear,left top,left bottom,from(#000000),to(#858585))");}
			);
		
			$('#retrybtn').click(function(){
			//alert("!!!!!");
			
			$('#retrybtn').css("background-image","-webkit-gradient(linear,left top,left bottom,from(#2295FF),to(#5ABAFA))");
			$('#networkconn_overlay').fadeOut('fast');
			isSyncing()
				});
				
				
	////////======================================camera============================/////////			
		
		
	////////======================================camera============================/////////
    }
	
	
	
/////////////////////////////////---------------------------------Checking internet Conection-------------//////	
	function onOnline() {
		$('#loginhome').fadeIn('fast');
		$('#retrybtn').fadeOut('fast');
		$('#networkconnContent').fadeOut('fast');
		$('#networkconn_overlay').fadeOut('fast');
		
		//syncing = true;
		if(pdtcategory == 1){
			
		getmobileList();
	
			}
		if(pdtcategory == 2){
		getsmartList();
	
			}
		if(pdtcategory == 3){
		gettabletList();
	
			}
		if(pdtcategory == 4){
		getlaptopsList();
	
			}
		if(pdtcategory == 5){
		getaccessoriesList();
	
			}
		if(id != 0 && detailpage == true){
			getproductdetails();
			}
		if(sellername == null && sellerpage == true){
			getsellerlist();
			}	
					setTimeout(function(){
						if(stillLoading == true){ 
						$('#connect').fadeIn('slow');
						$('#retrytxt').text("Timeout");
						$('#retrybtn').show('fast');
						$('#retrybtn').css("background-image","-webkit-gradient(linear,left top,left bottom,from(#535252),to(#000000))");
						$('#networkconn_overlay').fadeIn('slow');
						}else{ 
								$('#retrybtn').fadeOut('fast');
								$('#connect').fadeOut('fast');
								$('#networkconn_overlay').fadeOut('fast');
								
						  }
						
						
					},300000);
			
		
   /**/
    }
	function onOffline() {
		//$('#loginhome').fadeOut('fast');
		 stillLoading = false
					console.log(stillLoading);	
					$('#networkconnContent').fadeIn('slow');
					$('#networkconn_overlay').fadeIn('slow');
					//syncing = false;
					if(stillLoading == false){
				
					
						
						$('#connect').fadeOut('fast');
						$('#retrybtn').fadeOut(100);
					}
   
    }
	function isSyncing(){
		$('#connect').fadeOut('fast');
		$('#retrybtn').fadeOut(100);
		if(pdtcategory == 1){
			
		getmobileList();
	
			}
		if(pdtcategory == 2){
		getsmartList();
	
			}
		if(pdtcategory == 3){
		gettabletList();
	
			}
		if(pdtcategory == 4){
		getlaptopsList();
	
			}
		if(pdtcategory == 5){
		getaccessoriesList();
		
		}
		if(id != 0 && detailpage == true){
			getproductdetails();
			}
		if(sellername == null && sellerpage == true){
			getsellerlist();
			}
			setTimeout(function(){
						if(stillLoading == true){ 
						$('#connect').fadeIn('slow');
						$('#retrytxt').text("Timeout");
						$('#retrybtn').show('fast');
						$('#retrybtn').css("background-image","-webkit-gradient(linear,left top,left bottom,from(#535252),to(#000000))");
						$('#networkconn_overlay').fadeIn('sloe');
						}else{ 
								$('#retrybtn').fadeOut('fast');
								$('#connect').fadeOut('fast');
								$('#networkconn_overlay').fadeOut('fast');
								
						  }
						
						
					},300000);
			
					/*if(syncing == true){
							console.log(syncing);	
						
						
				}else{ $('#networkconnContent').fadeIn('slow');
				      }*/
		
		
		}
		
/////////////////////////////////---------------------------------Checking internet Conection-------------//////	





		
	function onConfirm(buttonIndex) {
			
			if(buttonIndex == 2){
				navigator.app.exitApp();
			}
		
		}
	
	
function onBackKeyDown() {
    //alert("!!!!!!!!!!!!");
	
	
	navigator.notification.confirm(
				'Sure to exit',  // message
				onConfirm,              // callback to invoke with index of button pressed
				'',            // title
				'Cancel,Ok'          // buttonLabels
			);
	
		
		// Show a custom confirmation dialog
		//
	
			
		
		
	
}
