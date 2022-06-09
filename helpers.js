//Custom functions that assist the execution of other main functions in another scripts

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

function findMiddleCoors(bigRectDims, smallRectDims)
{
	/*Find the coordinates a small rectangle must have to be centered in a big rectangle*/
	
	// Create a space in memory for the coordinates the small rectangle will have
	var smallRectCoors = {"x" : 0, "y" : 0};
	
	// Calculate the points according to the middle points of both the small and the big rect
	smallRectCoors["x"] = parseInt((bigRectDims.width - smallRectDims.width) / 2);
	smallRectCoors["y"] = parseInt((bigRectDims.height - smallRectDims.height) / 2);
	
	// Return the coordinates
	return smallRectCoors;
}

function mouseInImg(mouseCoors, imgDetails)
{
	/*Figures out if the mouse is within an image*/
	
	//Check the mouse X is between img x and img x + width, the same with mouse Y but concerning the height
	return ((mouseCoors["x"] >= imgDetails["x"] && mouseCoors["x"] <= imgDetails["x"] + imgDetails["width"]) && (mouseCoors["y"] >= imgDetails["y"] && mouseCoors["y"] <= imgDetails["y"] + imgDetails["height"]));
}
