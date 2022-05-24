/*										Event handlers 

								    It contains all the event handlers for the ICG
*/

/*Make the dev icon and nickname have the same style settings when
they are mouseover or mouseout*/

devIcon.addEventListener("mouseover", () => {fadeIn()});

devNickName.addEventListener("mouseover", () => {fadeIn()});

devIcon.addEventListener("mouseout", () => {fadeOut()});

devNickName.addEventListener("mouseout", () => {fadeOut()});

//Make the file dialog appear when the "Browse" button is clicked
localImgBtn.addEventListener("click", () => {
	localImgInput.click();
});

//When the local button is hover in, disable the URL input box
localImgBtn.addEventListener("mouseover", () => {urlImgInput.disabled = true});

//When the local button is hover out, enable the URL once again
localImgBtn.addEventListener("mouseout", () => {urlImgInput.disabled = false});

localImgInput.onchange = () => {
	localImgP.value = localImgInput.value;
	localImgP.innerHTML = localImgInput.value;
	console.log(0);
};

//Check if local image button has to be disabled when user hover in the URL input tag
urlImgInput.addEventListener("mouseover", () => {localBtnConfig()});

//Check if local image button has to be disabled when user hover out of the URL input tag
urlImgInput.addEventListener("mouseout", () =>  {localBtnConfig()});

//Check what information to clear out when the undo button is clicked
undoBtn.addEventListener("click", () => {

	urlImgInput.value = urlImgInput.value.replace(/\s/g,'');

	//First check that the length of the URL input tag value is 0
	if (urlImgInput.value.length != 0)
	{
		urlImgInput.value = "";
		localImgBtn.disabled = false;
	}

	if (localImgBtn.value != 0)
	{
		localImgBtn.value = "";
		urlImgInput.disabled = false;
	}
});

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

function localBtnConfig()
{
	urlImgInput.value = urlImgInput.value.replace(/\s/g,'');

	if (urlImgInput.value.length != 0) 
	{
	 
		localImgBtn.disabled = true;
		localImgBtn.style.cursor = "default";
		
	} 
	else 
	{ 
		localImgBtn.disabled = false;
		localImgBtn.style.cursor = "pointer";
	}

}
