/*										Main Script

						 Contains general code that will be used throught the ICG
*/

//Get relevant elements of the main page
const devIcon = document.querySelector("#imgIcon");
const devNickName = document.querySelector(".iconContainer h3");
const localImgInput = document.querySelector("#localImage");
const urlImgInput = document.querySelector("#imageURL");
const undoBtn = document.querySelector(".undoButton > button");
const localImgP = document.querySelector("#userLocalImgP");
const submitBtn = document.querySelector(".submitButton > button");
const appLink = document.querySelector("#app-link");
const mainLink = document.querySelector("#main-link");

// The source of the image to be given by the user
var givenImgSrc = "";