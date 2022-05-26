/*										Event handlers 

								    It contains all the event handlers for the ICG
*/

/*Make the dev icon and nickname have the same style settings when
they are mouseover or mouseout*/

devIcon.addEventListener("mouseover", () => {fadeIn()});

devNickName.addEventListener("mouseover", () => {fadeIn()});

devIcon.addEventListener("mouseout", () => {fadeOut()});

devNickName.addEventListener("mouseout", () => {fadeOut()});

//When the local button is hover in, disable the URL input box
localImgInput.addEventListener("mouseover", () => {localUrlConfig()});

//When the local button is hover out, enable the URL once again
localImgInput.addEventListener("mouseout", () => {localUrlConfig()});

//Write the user's image file in a small paragraph HTML element
localImgInput.addEventListener("change", () => {
	localImgP.value = localImgInput.value;
	localImgP.innerHTML = localImgInput.value.substr(12, localImgP.value.length - 12);
} );

//Check if local image button has to be disabled when user hover in the URL input tag
urlImgInput.addEventListener("mouseover", () => {localInputConfig()});

//Check if local image button has to be disabled when user hover out of the URL input tag
urlImgInput.addEventListener("mouseout", () =>  {localInputConfig()});

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
		const image = new Image();
	    image.src = urlImgInput.value;

	    //For now if image is sucessful, tell the user the image was sucessful
	    image.addEventListener('load', () => {alert('success')});

	    //If image failed, tell the user it failed and clear the URL input
	    image.addEventListener('error', () => {
	    	alert('failure');
	    	urlImgInput.value = "";
	    	localImgInput.disabled = false;
	    });
	}

	//Check the local image file is indeed an image
	if (localImgInput.value != 0)
	{
	}

	//Disable default submit button behaviour
	e.preventDefault();
});

//Custom functions that sumarize the code found in event listeners' anonymous functions
function fadeIn()
{
	devNickName.style.opacity = "1";
	devIcon.style.transition = "opacity 0.5s linear";

	//Styles when the mouse mouses over the dev icon and nickname
	devIcon.style.opacity = "1";
	devIcon.style.transition = "opacity 0.5s linear";
}

function fadeOut()
{
	devNickName.style.opacity = "0.7";
	devIcon.style.transition - "opacity 0.5s linear";

	devIcon.style.opacity = "0.7";
	devIcon.style.transition = "opacity 0.5s linear";
}

function localInputConfig()
{
	urlImgInput.value = urlImgInput.value.replace(/\s/g,'');

	if (urlImgInput.value.length != 0) 
	{
	 
		localImgInput.disabled = true;
		localImgInput.style.cursor = "default";
		
	} 
	else 
	{ 
		localImgInput.disabled = false;
		localImgInput.style.cursor = "pointer";
	}

}

function localUrlConfig()
{
	if (localImgInput.value.length != 0)
	{
		urlImgInput.disabled = true;
	}

	else
	{
		urlImgInput.disabled = false;
	}
}
