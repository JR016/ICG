/*										Event handlers 

								    It contains all the event handlers for the ICG
*/

/*Make the dev icon and nickname have the same style settings when
they are mouseover or mouseout*/

devIcon.addEventListener("mouseover", () => {fadeIn()});
devNickName.addEventListener("mouseover", () => {fadeIn()});
devIcon.addEventListener("mouseout", () => {fadeOut()});
devNickName.addEventListener("mouseout", () => {fadeOut()});

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
