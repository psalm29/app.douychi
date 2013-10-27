
	var numphotos = 0;
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for device API libraries to load
    //
	
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
	  
      
	  
      // Unhide image elements
      //
	if(numphotos == 0){
		numphotos = 1;
		console.log(numphotos);
		var smallImage = document.getElementById('image');
      image.style.display = 'block';
	  
	
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      image.src = "data:image/jpeg;base64," + imageData;
	}
	  if(numphotos == 1){
		  console.log(numphotos);
		  numphotos = 2;
		  
	var smallImage2 = document.getElementById('image2');
      image2.style.display = 'block';
	  
	
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      image2.src = "data:image/jpeg;base64," + imageData;
	  }
	   if(numphotos == 2){
		   console.log(numphotos);
		   numphotos = 1;
		   
	var smallImage = document.getElementById('image');
      smallImage.style.display = 'block';
	  
	
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
	  }
	  
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var smallimage = document.getElementById('image');

      // Unhide image elements
      //
      smallimage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallimage.src = imageURI;
    }
// A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
	  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }


	//sending of account variables
	$('#formAccount form').submit(function(){
			$('#message').load('http://douychi.com/services/account_server.php', {'name': $('#name').val(), 'email': $('#email').val(), 'pwd': $('#pwd').val(), 'pwd1': $('#pwd1').val(), 'phone': $('#phone').val(), 'address': $('#address').val(), 'image': $('#image').attr('src')});            
   return false;
		});
		
		//sending of product upload variables
		$('#form form').submit(function(){
			$('#message').load('http://douychi.com/services/addproduct_server.php', {'name': $('#name').val(), 'category': $('input:radio[name=category]:checked').val(), 'amount': $('#amount').val(), 'seller': sellername, 'description': $('#description').val(), 'image': $('#image').attr('src'), 'image1': $('#image2').attr('src')});            
   return false;
   
		});