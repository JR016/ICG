/*										Event handlers 

								    It contains all the event handlers for the ICG
*/

/*Make the dev icon and nickname have the same style settings when
they are mouseover or mouseout*/

devIcon.addEventListener("mouseover", () => {fadeIn()});

devNickName.addEventListener("mouseover", () => {fadeIn()});

devIcon.addEventListener("mouseout", () => {fadeOut()});

devNickName.addEventListener("mouseout", () => {fadeOut()});


//Write the user's image file in a small paragraph HTML element
localImgInput.addEventListener("change",() => {
	localUrlConfig();
	localImgP.value = localImgInput.value;
	localImgP.innerHTML = localImgInput.value.substr(12, localImgP.value.length - 12);
});

//Enable/Disable the local input tag dependening on the text written un the URL
urlImgInput.addEventListener("input", () => {localInputConfig()});

//Check what information to clear out when the undo button is clicked
undoBtn.addEventListener("click", () => {

	//Strip all white space from the given URL
	urlImgInput.value = urlImgInput.value.replace(/\s/g,'');

	//First check that the length of the URL input tag value is 0
	if (urlImgInput.value.length != 0)
	{
		//Clear the Url image input and enable the local Img Input
		urlImgInput.value = "";
		localImgInput.disabled = false;
	}

	if (localImgInput.value != 0)
	{
		//Clear the local image input and enable the url input. Re-write the mini HTML tag as well
		localImgInput.value = "";
		urlImgInput.disabled = false;
		localImgP.innerHTML = "";
	}

});

//Check the given data is ready to display an image file
submitBtn.addEventListener("click", (e) => {

	//Strip all white space from the given URL
	urlImgInput.value = urlImgInput.value.replace(/\s/g,'');

	// Check the given URL leads to an image
	if (urlImgInput.value.length != 0)
	{	
		const urlImg= new Image();
		urlImg.src = urlImgInput.value;
		
		//If image loaded successfully, then add its source to the givenImgSource
		urlImg.addEventListener("load", () => {
			givenImgSrc = urlImg.src;
		});
		

	    //If image failed, tell the user it failed and clear the URL input
	    urlImg.addEventListener('error', () => {
	    	alert('The given URL does not belong to an image');
	    	urlImgInput.value = "";
	    	localImgInput.disabled = false;
			givenImgSrc = "";
			console.clear();
	    });
		
	}

	//Check the local image file is indeed an image
	else if (localImgInput.value != 0)
	{
		// Get the type of the file the user entered
		const selectedFileType = localImgInput.files[0].type;
		
		//If the substring "image" is not present in the file type, tell the user it is not an image
		if (!selectedFileType.includes("image"))
		{
			alert("The file " + localImgInput.files[0].name + " is not an image");
			localImgInput.value = "";
			localImgP.value = "";
			localImgP.innerHTML = "";
			urlImgInput.disabled = false;
		}
		
		//Otherwise alert the user the image was sucessfully uploaded
		else
		{	
			//Extract the file from which to build the image
			const localImageFile = localImgInput.files[0];
			const localImg = new Image();
			localImg.src = URL.createObjectURL(localImageFile);
			givenImgSrc = localImg.src;
		}
	}
	
	else 
	{
		
	}
	
	setTimeout(() => {
		//Go to app.html
		if (givenImgSrc.length != 0)
		{
			window.sessionStorage.setItem("imgSrc", givenImgSrc);
			appLink.click();
		}
	
	}, 600);
	
	e.preventDefault();
	
});